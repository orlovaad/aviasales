function TransferLabel({ text, callback, isChecked }) {
  return (
    <label>
      <input type="checkbox" className="input visually-hidden" checked={isChecked} onChange={callback} />
      <span className="checker"></span> {text}
    </label>
  );
}

export default TransferLabel;
