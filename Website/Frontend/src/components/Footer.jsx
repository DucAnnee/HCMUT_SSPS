import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";
import hcmut_logo from "../assets/HCMUT.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        py: 2,
        px: 2,
        bgcolor: "white",
        color: "primary.dark",
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.2)",
        mt: "auto",
      }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box>
            <Typography fontSize={16} fontWeight="bold">
              Địa chỉ:
            </Typography>
            <Typography fontSize={14}>
              CS1: 268 Lý Thường Kiệt, Phường 14, Quận 10, TP. HCM
            </Typography>
            <Typography fontSize={14}>
              CS2: Khu phố Tân Lập, Phường Đông Hòa, TP. Dĩ An, Tỉnh Bình Dương
            </Typography>
          </Box>
          <Box
            sx={{ position: "absolute", height: 60, width: 60, left: "50%" }}>
            <img src={hcmut_logo} alt="HCMUT" />
          </Box>
          <Box>
            <Typography fontSize={16} fontWeight="bold">
              Liên hệ Tổ kỹ thuật:
            </Typography>

            <Typography fontSize={14}>Email : ddthu@hcmut.edu.vn</Typography>
            <Typography fontSize={14}>
              ĐT (Tel.) : (84-8) 38647256 - 5258
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
