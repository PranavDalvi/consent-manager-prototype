import app from "./app";
import { recoverPendingInternalEvents } from "./events/internal-event.publisher";

const PORT = process.env.PORT || 3000;

void recoverPendingInternalEvents();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});