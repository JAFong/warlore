class HeaderBox extends React.Component {
  mouseOver() {
    $(".header-style").removeClass("hide").addClass("show");
  }
  mouseOut() {
    $(".header-style").removeClass("show").addClass("hide");
  }
  render() {
    return (
      <div className="header-wrapper" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className="header-style hide">
          <div className="header-box">I am a header box!</div>
        </div>
      </div>
    )
  }
}

export default HeaderBox;
