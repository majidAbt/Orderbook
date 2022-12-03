import React from 'react';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Popper,
  Fade,
  Box,
} from '@mui/material';

export default function OrderBookTable({
  headers,
  ordersList,
  ordersDirection = 'ascending',
}) {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [hoveredList, setHoveredList] = React.useState([]);

  const ordersDirectionCondition = (ordersListItem, hoveredItem) => {
    return ordersDirection === 'ascending'
      ? ordersListItem >= hoveredItem
      : ordersListItem <= hoveredItem;
  };

  const cellBorderPosition = ordersDirection === 'ascending' ? 'top' : 'bottom';

  const CustomPopper = ({ id }) => {
    return (
      <Popper
        id={id}
        open={tooltipOpen}
        anchorEl={anchorEl}
        transition
        onMouseEnter={(event) => handlePopper(event, anchorEl)}
        placement="left"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box
              sx={{ p: 1, bgcolor: 'gray', m: 8 }}
              display="flex"
              flexDirection="column"
            >
              <Typography>
                {' '}
                Sum ={' '}
                {Number(parseFloat(hoveredList.at(-1).sumAmount).toFixed(5))}
              </Typography>
              <Typography>
                {' '}
                Sum ={' '}
                {Number(parseFloat(hoveredList.at(-1).sumAmount).toFixed(5))}
              </Typography>
            </Box>
          </Fade>
        )}
      </Popper>
    );
  };
  console.log(hoveredList);

  const handlePopper = (event, item) => {
    setTooltipOpen(true);
  };

  const handleOnMouseEnter = (event, item) => {
    setAnchorEl(event.currentTarget);
    setTooltipOpen(true);
    setSelectedItem(item);
    const results = [];
    let sum = 0;
    ordersList.map((it) => {
      ordersDirectionCondition(it.id, item.id) &&
        (results.push(it), results.push({ sumAmount: (sum += it.amount) }));
    });
    setHoveredList(results);
  };

  const mouseLeaveTableAction = () => {
    setTooltipOpen(false);
    setHoveredList([]);
    setSelectedItem(null);
  };

  return (
    <Stack flexDirection="column" gap={0}>
      <TableContainer>
        <Table aria-label="order-book">
          <TableHead>
            <TableRow>
              {headers.map((item) => (
                <TableCell key={item.id} align="center" sx={{}}>
                  <Typography variant="body2" color="textColor.A60">
                    {item.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody onMouseLeave={mouseLeaveTableAction}>
            {ordersList.map((item) => (
              <TableRow
                key={item.id}
                onMouseEnter={(event) => handleOnMouseEnter(event, item)}
                sx={(theme) => ({
                  position: 'relative',
                  // [`border-${cellBorderPosition}`]: `1px solid gray`,
                  ...(hoveredList.find((element) => element.id === item.id) && {
                    bgcolor: 'gray',
                    borderColor: 'gray',
                    opacity: 0.9,
                  }),
                  ...(selectedItem?.id === item.id && {
                    [`border-${cellBorderPosition}`]: `1px dashed black`,
                  }),
                })}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  sx={{ borderBottom: 'gray' }}
                >
                  <Typography variant="body2" color={item.color}>
                    {item.price}
                  </Typography>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="right"
                  sx={{ borderBottom: 'gray' }}
                >
                  <Typography variant="body2">{item.amount}</Typography>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="right"
                  sx={{ borderBottom: 'gray' }}
                >
                  <Typography variant="body2">{item.totalPrice}</Typography>
                </TableCell>
              </TableRow>
            ))}
            <CustomPopper item={selectedItem} />
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
