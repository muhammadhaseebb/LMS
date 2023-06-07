import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <div className="parentDiv-01">
        <div className="LMS">
          <p>LMS</p>
        </div>
        <div className="NavHolder">
          <button>Dashboard</button>
          <button>Result Card</button>
          <button>Fee</button>
          <button>Profile</button>
          <button>Settings</button>
          <button>Sign Out</button>
        </div>
      </div>

      <div className="parentDiv-02">
        <div className="Name">
          <p className="username">Mario Kirby</p>
        </div>

        <div className="Picture">
          <img
            src="data:image/jpeg;base64,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"
            className="picture"
            alt="Loading..."
          />
        </div>
      </div>

      <div className="parentDiv-03">
        <div className="table">
          <caption className="outerCap">Grades</caption>
          <table>
            <caption className="innerCap">MATERIAL</caption>

            <thead>
              <tr>
                <th colspan="1">Content</th>
                <th colspan="1">Description</th>
                <th colspan="1">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lecture 1</td>
                <td>Classes and Objects</td>
                <td>DR Mushtaq</td>
              </tr>
              <tr>
              <td>Lecture 2</td>
                <td>UML</td>
                <td>DR Mushtaq</td>
                
              </tr>
              <tr>
              <td>Lecture 3</td>
                <td>Abstratction</td>
                <td>DR Mushtaq</td>
               
              </tr>
              <tr>
              <td>Lecture 4</td>
                <td>Encapsulation</td>
                <td>DR Mushtaq</td>
                
              </tr>
              <tr>
              <td>Lecture 5</td>
                <td>Association</td>
                <td>DR Mushtaq</td>
                
              </tr>
              <tr>
              <td>Lecture 6</td>
                <td>Abstraction</td>
                <td>DR Mushtaq</td>
                </tr>
            
            </tbody>
          </table>
         
         
        </div>
      </div>
    </div>
  );
}
