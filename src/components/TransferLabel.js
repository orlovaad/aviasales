function TransferLabel({ text }) {
  return (
    <label>
      <input type="checkbox" className="input visually-hidden" />
      <span className="checker"></span> {text}
    </label>
  );
}

export default TransferLabel;
