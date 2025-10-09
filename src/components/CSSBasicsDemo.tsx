// Creating the demo component
export function CSSBasicsDemo() {
  return (
    <div className="demo-container"> {/* 1. demo-container class*/}
      <h2>CSS Basics Demo</h2>
      <div className="box-model-demo">
        <h3>Box Model</h3>
        <div className="box-example"> {/* 2. box-example class */}
          <div className="content">Content</div>
        </div>
      </div>
    </div>
  );
}
export default CSSBasicsDemo;
