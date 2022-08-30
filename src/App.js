import "./styles.css";
import GoogleMeeting from "google-meet-api";

export default function App() {
  const Meeting = GoogleMeeting.meet;

  const meetingLink = () => {
    console.log("Meeting");
    Meeting({
      clientId:
        "581185728-vjbdauk2426nifq9ofk5ef46rng7v5e0.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//0gkloLKaedFlVCgYIARAAGBASNwF-L9IrET6QBDPKNZsrNgAIfqso3WG4gppbd8gywS7Rr3CtkxdW5YGZYosgMihMQbnBb5RH53Y",
      date: "2022-12-01",
      time: "10:59",
      summary: "summary",
      location: "location",
      description: "description"
    })
      .then(function (result) {
        console.log(result); //result it the final link
      })
      .catch((error) => {
        console.log("error::", error);
      });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={meetingLink}> Meeting Link</button>
    </div>
  );
}
