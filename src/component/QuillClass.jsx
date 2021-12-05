import React, {Component} from "react"
import ReactQuill, {Quill} from 'react-quill'; // ES6


class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "",
      }
    }
  
    modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ],
    }
  
    formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]
  
    render() {
      return (
        <div className="text-editor">
          <ReactQuill theme="snow"
                      modules={this.modules}
                      formats={this.formats}>
          </ReactQuill>
        </div>
      );
    }
  }
  
  export default MyComponent;

// let Inline = Quill.import('blots/inline');
// class BoldBlot extends Inline { }
// BoldBlot.blotName = 'bold';
// BoldBlot.tagName = 'strong';
// Quill.register(BoldBlot);

// let BlockEmbed = Quill.import('blots/block/embed');
// class ImageBlot extends BlockEmbed {
//     static create(value) {
//       let node = super.create();
//       node.setAttribute('alt', value.alt);
//       node.setAttribute('src', value.url);
//       return node;
//     }
  
//     static value(node) {
//       return {
//         alt: node.getAttribute('alt'),
//         url: node.getAttribute('src')
//       };
//     }
//   }
//   ImageBlot.blotName = 'image';
//   ImageBlot.tagName = 'img';
//   Quill.register(ImageBlot);

// const formats = ["bold","image"] // add custom format name + any built-in formats you need

// /*
//  * Editor component with default and custom formats
//  */
// class QuillClass extends React.Component {
//   constructor(props) {
//       super()
//     this.formats = formats
//     this.state = { text: '' }
//   }

//   handleChange(value) {
//     this.setState({text: value})
//   }

//   render() {
//     return (
//       <ReactQuill
//         value={this.state.text}
//         onChange={this.handleChange}
//         formats={this.formats}
//       />
//     )
//   }
// }

// export default QuillClass;