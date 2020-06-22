const xError = <div className="xError"></div>;

export const Input = (props) => (
  <div className="fieldHolder">
    <div className="errorIcon">
      {props.error ? <div className="xError" /> : null}
    </div>
    <input
      // className="testInput"
      placeholder={props.placeholder}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
    ></input>
    <style jsx="true">{`
      .errorIcon {
        position: absolute;
        right: 5px;
        height: 15px;

        top: 50%;
        transform: translateY(-50%);
      }
      .fieldHolder {
        position: relative;
        width: ${props.width};
        margin-top: ${props.gap};
        margin-bottom: ${props.gap};
      }
      .xError {
        display: block;
        box-sizing: border-box;
        width: 15px;
        height: 15px;
        border-width: 3px;
        border-style: solid;
        border-color: red;
        border-radius: 100%;
        background: -webkit-linear-gradient(
            -45deg,
            transparent 0%,
            transparent 46%,
            white 46%,
            white 56%,
            transparent 56%,
            transparent 100%
          ),
          -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white
                46%, white 56%, transparent 56%, transparent 100%);
        background-color: red;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s ease;
      }

      input {
        color: ${props.color};
        position: relative;
        width: 100%;
        font-size: 16px;
        background: rgb(144, 144, 144, 0.3);
        border-radius: 4px;
        border: solid 1px
          ${props.error ? "rgba(255, 4, 4, 0.5)" : "rgba(144, 144, 144, 0.5)"};
        display: block;
        outline: 0;
        padding: 10px;
        transition: 0.2s ease-in-out;
        opacity: 1;
      }
      input::-webkit-input-placeholder {
        color: ${props.color};
        opacity: 0.6;
      }
      input:focus::-webkit-input-placeholder {
        opacity: 0;
        transition: 0.2s ease-in-out;
      }
      input:focus {
        background: rgb(144, 144, 144, 0.1);
      }
    `}</style>
  </div>
);

export const Textarea = (props) => (
  <div className="fieldHolder">
    <div className="errorIcon">
      {props.error ? <div className="xError" /> : null}
    </div>
    <textarea
      // className="testInput"
      placeholder={props.placeholder}
      name={props.name}
      type={props.type}
      style={{ color: props.color }}
      onChange={props.onChange}
      rows={props.rows}
      autoComplete={props.autoComplete}
    ></textarea>
    <style jsx="true">{`
      .errorIcon {
        position: absolute;
        right: 5px;
        height: 15px;

        bottom: 6px;
      }
      .fieldHolder {
        position: relative;
        width: ${props.width};
        margin-top: ${props.gap};
        margin-bottom: ${props.gap};
      }
      .xError {
        display: block;
        box-sizing: border-box;
        width: 15px;
        height: 15px;
        border-width: 3px;
        border-style: solid;
        border-color: red;
        border-radius: 100%;
        background: -webkit-linear-gradient(
            -45deg,
            transparent 0%,
            transparent 46%,
            white 46%,
            white 56%,
            transparent 56%,
            transparent 100%
          ),
          -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white
                46%, white 56%, transparent 56%, transparent 100%);
        background-color: red;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
        transition: all 0.2s ease;
      }

      textarea {
        resize: none;
        color: ${props.color};
        position: relative;
        width: 100%;
        font-size: 16px;
        background: rgb(144, 144, 144, 0.3);
        border-radius: 4px;
        border: solid 1px
          ${props.error ? "rgba(255, 4, 4, 0.5)" : "rgba(144, 144, 144, 0.5)"};
        display: block;
        outline: 0;
        padding: 10px;
        transition: 0.2s ease-in-out;
        opacity: 1;
      }
      textarea::-webkit-input-placeholder {
        color: ${props.color};
        opacity: 0.6;
      }
      textarea:focus::-webkit-input-placeholder {
        opacity: 0;
        transition: 0.2s ease-in-out;
      }
      textarea:focus {
        background: rgb(144, 144, 144, 0.1);
      }
    `}</style>
  </div>
);

export const Button = (props) => (
  <div className="buttonHolder">
    <button
      disabled={props.disabled || props.submitting}
      onClick={props.onClick}
      // className="testInput"
    >
      {props.submitting ? props.submitting : props.label}
    </button>
    <style jsx="true">{`
      button {
        cursor: ${props.disabled || props.submitting ? "" : "pointer"};
        display: inline-block;
        background: linear-gradient(
          180deg,
          ${
            props.disabled || props.submitting ? "#666666" : props.gradient[0]
          } 0%,
          ${
            props.disabled || props.submitting ? "#CCCCCC" : props.gradient[1]
          } 100%
        );
        border-radius: 3px;
        color: ${props.disabled || props.submitting ? "#555555" : props.color};
        border: none;
        outline: none;
        font-size: 15px;
        font-family: inherit;
        padding: 10px 25px 10px 25px;
        boxshadow: 2px 3px 1px 1px rgb(0, 0, 0, 0.5);
        -webkit-transition: background-color 0.1s ease-in-out,
        -o-transition: all .2s;
        -moz-transition: all .2s;
        -webkit-transition: all .2s;
        transition: all .2s;
        width: ${props.fullwidth ? "100%" : "auto"};
      }
      button:hover {
        box-shadow:inset 0px 0px 5px 3px rgb(255, 255, 255, 0.5);
      }
      .buttonHolder {
        position: relative;

        margin-top: ${props.gap};
        margin-bottom: ${props.gap};
      }
    `}</style>
  </div>
);
