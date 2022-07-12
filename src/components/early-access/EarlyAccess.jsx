import "./early-access.scss";

export const EarlyAccess = () => {
  return (
    <div className="early-access">
      <h3>Get early access today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you.
      </p>
      <div className="emailInput">
        <div className="input">
          <input type="email" placeholder="you@example.com"/>
          <p className="error">Please enter a valid email adress.</p>
        </div>
        <button>Get started for free</button>
      </div>
    </div>
  );
};
