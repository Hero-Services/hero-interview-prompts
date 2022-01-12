/**
 * Password Generator
 */

const MIN_RECOMMENDED_LENGTH = 10;
const MAX_LEN = 50;

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const LOCASE_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const UPCASE_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const SYMBOLS = ["@", "#", "$", "%", "=", ":", "?", ".", "/", "|", "~", ">", "*", "(", ")", "'"];

const Output = () => {
  const [password, setPassword] = React.useState("");
  const [hasUpper, setHasUpper] = React.useState(true);
  const [hasLower, setHasLower] = React.useState(true);
  const [hasSymbols, setHasSymbols] = React.useState(true);

  const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

  const generate = () => {
    const rDigit = randomElement(DIGITS);
    const rLower = randomElement(LOCASE_LETTERS);
    const rUpper = randomElement(UPCASE_LETTERS);
    const rSymbol = randomElement(SYMBOLS);

    let tempPass = "";
    let characters = DIGITS;

    tempPass += rDigit;

    if (hasLower) {
      tempPass += rLower;
      characters = characters.concat(LOCASE_LETTERS);
    }

    if (hasUpper) {
      tempPass += rUpper;
      characters = characters.concat(UPCASE_LETTERS);
    }

    if (hasSymbols) {
      tempPass += rSymbol;
      characters = characters.concat(SYMBOLS);
    }

    // convert temporary password into array and shuffle
    for (let i = 0; i < MIN_RECOMMENDED_LENGTH; i++)
      tempPass = tempPass + randomElement(characters.join(""));

    // Shuffle
    const password = tempPass.split("");
    password.sort(() => Math.random() - 0.5);

    return password.join("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPassword(generate());
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul style={{listStyle: "none", padding: 0}}>
        <li style={{padding: "10px 0"}}>
          <label htmlFor="password">Password Generator</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "5px"
            }}>
            <input
              type="text"
              name="password"
              placeholder="Password..."
              value={password}
              disabled
              style={{
                maxWidth: "150px",
                marginRight: "5px"
              }}
            />
            <button type="submit" onClick={generate}>
              Generate
            </button>
          </div>
        </li>
        <li>
          <input
            type="checkbox"
            name="hasUpper"
            defaultChecked
            onChange={e => setHasUpper(e.target.checked)}
          />
          <label htmlFor="hasUpper">Use Uppercase</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="hasLower"
            defaultChecked
            onChange={e => setHasLower(e.target.checked)}
          />
          <label htmlFor="hasLower">Use Uppercase</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="hasSymbols"
            defaultChecked
            onChange={e => setHasSymbols(e.target.checked)}
          />
          <label htmlFor="hasSymbols">Use Symbols</label>
        </li>
      </ul>
    </form>
  );
};
