import Button from "@mui/material/Button";
import ReplayIcon from "@mui/icons-material/Replay";

function ErrorScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/imgs/error.png"
        alt="error"
        className="w-[300px] h-[300px] object-contain"
      />
      <h1>Oops! an unexpected error ocurred, try reloading the page</h1>
      <Button
        onClick={() => window.location.reload()}
        startIcon={<ReplayIcon />}
        variant="contained"
        color="info"
        sx={{ mt: 2 }}
      >
        Reload Page
      </Button>
    </div>
  );
}

export default ErrorScreen;
