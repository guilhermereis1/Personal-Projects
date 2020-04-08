import React, { Component } from "react";
import "./App.css";
import { Editor } from "@tinymce/tinymce-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inicialValue: "<p>This is the initial content of the editor</p>"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rich Text Editor</h1>
          <div>
            <Editor
              initialValue={this.state.inicialValue}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
              }}
            />
          </div>
          <div className="footer">
            <a href="https://www.worldcode.com.br" className="footer_link">
              Desenvolvido por
            </a>
            <br />
            <br />
            <div>
              <a href="https://www.worldcode.com.br">
                <img
                  class="logo_footer"
                  src="https://www.worldcode.com.br/app/uploads/2019/08/logo_world_code_black-1024x192-1024x192.png"
                  width="300"
                />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
