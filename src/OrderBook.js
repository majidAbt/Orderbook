import { Paper, Stack, Typography, Select, MenuItem } from '@mui/material';
import React from 'react';
import OrderBookTable from './OrderBookTable';
const OrderBook = () => (
  <Paper elevation={2} square>
    <Stack flexDirection="column" gap={3}>
      <Stack flexDirection="column" pt={6} px={3} gap={1.5}>
        <Typography variant="body1">دفتر سفارش</Typography>
        <Select
          variant="filled"
          labelId="precision"
          id="precision"
          value="1"
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          sx={{ alignSelf: 'end' }}
        >
          <MenuItem value="1">0.01</MenuItem>
          <MenuItem value="2">0.1</MenuItem>
        </Select>
      </Stack>
      <OrderBookTable
        headers={headers}
        ordersList={ascendingOrdersList}
        cellBorderPosition="bottom"
        ordersDirection="ascending"
      />
      <Typography
        variant="body1"
        weight="bold"
        color="error"
        textAlign="right"
        py={3}
      >
        ۶۷۳,۷۰۰,۳۴۶
      </Typography>
      <OrderBookTable
        headers={headers}
        ordersList={descendingOrdersList}
        cellBorderPosition="top"
        ordersDirection="descending"
      />
    </Stack>
  </Paper>
);

export default OrderBook;

const descendingOrdersList = [
  {
    id: 0,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 1,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 2,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 3,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 4,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 5,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 6,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
  {
    id: 7,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'error.main',
  },
];

const ascendingOrdersList = [
  {
    id: 11,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 12,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 13,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 14,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 15,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 16,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 17,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
  {
    id: 18,
    price: '۶۷۷,۴۷۸,۲۹۶',
    amount: 0.007945,
    totalPrice: '۷,۶۹۱,۵۶۴',
    color: 'success.main',
  },
];

const headers = [
  { id: 333, label: 'قیمت (TMN)' },
  { id: 1111, label: 'مقدار (BTC)' },
  { id: 222, label: 'قیمت کل (TMN)' },
];
