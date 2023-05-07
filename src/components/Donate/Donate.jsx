import React, { useState } from 'react'
import { Box, Typography, Stack } from '@mui/material';
import MultipleSelect from '../../UI/Selector';

// paypal lib
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

export default function Donate() {
  let amount = 1;

  const amountChangeHandler = (amt) => {
    amount = amt;
  }

  return (
    <Box sx={{ minHeight: "100vh", padding: "2rem", display: "flex", justifyContent: "center", margin:"auto", alignItems: "center"}}>
        <Stack>
          <MultipleSelect onAmountChange={amountChangeHandler}/>
            <Typography margin="2rem" textAlign="center">You can donate to us using PayPal or Debit/Credit Card</Typography>
            <PayPalScriptProvider options={{ "client-id": "AXFr-BM7JReVxayfmzugWgXgLvc6TTMrgXcVKYL4K-nE1N_LzFTWrLUQvBxC-khbz18YJGJF9DftL37V" }}>
                <PayPalButtons 
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: amount
                        },
                      },
                    ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                      alert("Transaction completed by " + details.payer.name.given_name);
                    })
                  }}
                />
            </PayPalScriptProvider>
        </Stack>
    </Box>
  )
}

// options={{ "client-id": "AXFr-BM7JReVxayfmzugWgXgLvc6TTMrgXcVKYL4K-nE1N_LzFTWrLUQvBxC-khbz18YJGJF9DftL37V" }}