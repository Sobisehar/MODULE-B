import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BasicCard = ({
  title,
  monthlyFees,
  yearlyFees,
  onBackClick,
  onPayNowClick,
}) => {
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 400,
        height: "300px",
        backgroundColor: "#bbb",
        color: "#ffff",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            color: "#21445D",
            textDecoration: "underline",
            textAlign: "center",
            marginBottom: "30px",
          }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 20, mb: 1.5, color: "black" }}>
          Monthly Fees: {monthlyFees}
        </Typography>
        <Typography sx={{ fontSize: 20, color: "black" }}>
          Yearly Fees: {yearlyFees}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            width: "50%",
            margin: "auto",
            backgroundColor: "#21445D",
            color: "#ffff",
            "&:hover": {
              backgroundColor: "#345a75", // Lighter color on hover
              transform: "translateY(-2px)", // Slightly move up on hover
              transition: "all 0.3s ease", // Smooth transition
            },
          }}
          onClick={onPayNowClick}>
          Pay Now
        </Button>
      </CardActions>
      <CardActions>
        <Button
          size="small"
          sx={{
            width: "50%",
            margin: "auto",
            backgroundColor: "#21445D",
            color: "#ffff",
            "&:hover": {
              backgroundColor: "#345a75", // Lighter color on hover
              transform: "translateY(-2px)", // Slightly move up on hover
              transition: "all 0.3s ease", // Smooth transition
            },
          }}
          onClick={onBackClick}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default function FeesVoucher() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const classData = [
    {
      title: "Fee Voucher - Class 1",
      monthlyFees: "5,000",
      yearlyFees: "60,000",
    },
    {
      title: "Fee Voucher - Class 2",
      monthlyFees: "5,500",
      yearlyFees: "66,000",
    },
    {
      title: "Fee Voucher - Class 3",
      monthlyFees: "6,000",
      yearlyFees: "72,000",
    },
    {
      title: "Fee Voucher - Class 4",
      monthlyFees: "6,500",
      yearlyFees: "78,000",
    },
    {
      title: "Fee Voucher - Class 5",
      monthlyFees: "7,000",
      yearlyFees: "84,000",
    },
    {
      title: "Fee Voucher - Class 6",
      monthlyFees: "7,500",
      yearlyFees: "90,000",
    },
    {
      title: "Fee Voucher - Class 7",
      monthlyFees: "8,000",
      yearlyFees: "96,000",
    },
    {
      title: "Fee Voucher - Class 8",
      monthlyFees: "8,500",
      yearlyFees: "102,000",
    },
    {
      title: "Fee Voucher - Class 9",
      monthlyFees: "9,000",
      yearlyFees: "108,000",
    },
    {
      title: "Fee Voucher - Class 10",
      monthlyFees: "9,500",
      yearlyFees: "114,000",
    },
  ];

  const handleBackClick = () => {
    setSelectedCardIndex(null);
  };

  const handlePayNowClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#21445D",
      }}>
      {selectedCardIndex === null && (
        <Box
          sx={{
            maxWidth: 900,
            mb: 3,
            p: 2,
            borderRadius: "8px",
            backgroundColor: "transparent",
            textAlign: "center",
          }}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ color: "#ffffff", mb: 5 }}>
            Classes Fees Voucher
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {classData.map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#19969e",
                    "&:hover": {
                      backgroundColor: "#177e87",
                    },
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => setSelectedCardIndex(index)}>
                  Fee Voucher Class {index + 1}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {selectedCardIndex !== null && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <BasicCard
            title={classData[selectedCardIndex].title}
            monthlyFees={classData[selectedCardIndex].monthlyFees}
            yearlyFees={classData[selectedCardIndex].yearlyFees}
            onBackClick={handleBackClick}
            onPayNowClick={handlePayNowClick}
          />
        </Box>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          Voucher Pay
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>Your voucher has been paid successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
