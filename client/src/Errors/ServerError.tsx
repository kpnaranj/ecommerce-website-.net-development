import { Fragment } from "react";
import { Container, Divider, Paper, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

interface ServerErrorState {
  detail: string;
  status: number;
  title: string;
}

const ServerError = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ServerErrorState;
  const isServerError = Object.keys(state).length !== 0;

  return (
    <Container component={Paper}>
      {isServerError ? (
        <Fragment>
          <Typography variant="h5" color="error" gutterBottom>
            {state?.title}
          </Typography>
          <Divider />
          <Typography>{state?.detail || "Internal Server Error"}</Typography>
        </Fragment>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server Error
        </Typography>
      )}
      <Button onClick={() => navigate("/catalog")}>Go Back to Store</Button>
    </Container>
  );
};

export default ServerError;
