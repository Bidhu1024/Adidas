import { Box, Link, Typography } from "@mui/material";
import { type FC } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Streched {
  handleClick: () => void;
}
const Streched: FC<Streched> = ({ handleClick }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          border: "1px solid black",
          p: 1,
        }}
      >
        <CloseIcon sx={{ fontSize: "2rem" }} onClick={handleClick} />
      </Box>
      <Box sx={{ width: "100%", display: "flex", mt: "6rem",p:1 }}>
        <Box>
          <Typography
            fontFamily={"AdihausDIN, Helvetica, Arial, Helvetica, sans-serif"}
            fontSize={"1rem"}
            fontWeight={700}
          >
            SIGN UP & GET 10% OFF
          </Typography>
          <Typography
            fontFamily={"AdihausDIN, Helvetica, Arial, Helvetica, sans-serif"}
            fontSize={14}
            fontWeight={400}
          >
            Members get more! Like a 10% discount voucher early access to the
            sales and access to limited edition products. Sign up now
          </Typography>
          <Link
            sx={{
          //    textDecoration: "underlined",
              color: "black",
              fontWeight: "600",
            }}
          >
            LEARN MORE
          </Link>
        </Box>
        <Box>
          <Typography
            fontFamily={"AdihausDIN, Helvetica, Arial, Helvetica, sans-serif"}
            fontSize={"1rem"}
            fontWeight={700}
          >
            FREE DELIVERY, RETURN & EXCHANGE
          </Typography>
          <Typography
            fontFamily={"AdihausDIN, Helvetica, Arial, Helvetica, sans-serif"}
            fontSize={14}
            fontWeight={400}
          >
            Spend over Rs1000/- and your delivery is FREE! For all orders,
            Return & Exchange is offered for free. Delivery times for Delhi,
            Gurgaon: 1-2 Days, Metro Cities: 2-3 Days Others: 3-5 Days.
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="10px"
            sx={{ mt: ".3rem" }}
          >
            <Link
              sx={{
              //  textDecoration: "underlined",
                color: "black",
                fontWeight: "600",
              }}
            >
              READ MORE ON DELIVERY
            </Link>
            <Link
              sx={{
                textDecoration: "underlined",
                color: "black",
                fontWeight: "600",
              }}
            >
              READ MORE ON RETURN
            </Link>
            <Link
              sx={{
                textDecoration: "underlined",
                color: "black",
                fontWeight: "600",
              }}
            >
              READ MORE ON EXCHANGE
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography
            fontFamily={"AdihausDIN, Helvetica, Arial, Helvetica, sans-serif"}
            fontSize={"1rem"}
            fontWeight={700}
          >
            STUDENTS GET 15% OFF
          </Typography>
          <Typography
            fontFamily={"AdihausDIN, Helvetica, Arial, Helvetica, sans-serif"}
            fontSize={14}
            fontWeight={400}
          >
            For instant access to this discount simply join now and verify your
            student status with UNiDAYS !
          </Typography>
          <Link
            sx={{
              textDecoration: "underlined",
              color: "black",
              fontWeight: "600",
            }}
          >
            JOIN NOW
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Streched;
