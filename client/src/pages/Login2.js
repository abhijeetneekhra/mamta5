import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import "./Login2.css";
//import { useDispatch } from "react-redux";
//import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Login2 = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/admin/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        //localStorage.setItem("userId", data?.user._id);
        //dispatch(authActions.login());
        toast.success("User login Successfully");
        localStorage.setItem("login", true);
        //localStorage.setItem("userId", inputs.email);
        //localStorage.setItem("userName", data.user.username);
        //localStorage.setItem("token", data.token);

        const appHeader = document.getElementById("app-header");
        appHeader.style.display = "block";

        const appSidebar = document.getElementById("app-sidebar");
        appSidebar.style.display = "block";

        const footer = document.getElementById("footer");
        footer.style.display = "block";

        const header = document.getElementsByClassName("jumps-prevent")[0];
        header.style.paddingTop = "74px";

        const header2 = document.getElementsByClassName("jumps-prevent")[1];
        header2.style.paddingTop = "74px";

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const appHeader = document.getElementById("app-header");
      appHeader.style.display = "none";

      const appSidebar = document.getElementById("app-sidebar");
      appSidebar.style.display = "none";

      const footer = document.getElementById("footer");
      footer.style.display = "none";

      const header = document.getElementsByClassName("jumps-prevent")[0];
      header.style.paddingTop = "0";

      const header2 = document.getElementsByClassName("jumps-prevent")[1];
      header2.style.paddingTop = "0";

      // x.style.display = "block";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      {/* saved from url=(0037)https://dho.rkskpeereducator.in/admin */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <style
        data-merge-styles="true"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      {/* META DATA */}
      <style
        data-merge-styles="true"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      <style
        data-merge-styles="true"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="MAMTA- DHO" />
      <meta name="author" content="MAMTA- DHO" />
      <meta name="keywords" content="MAMTA- DHO" />
      {/* FAVICON */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://dho.rkskpeereducator.in/assets//images/brand/favicon.ico"
      />
      {/* TITLE */}
      <title>MAMTA- DHO Admin</title>
      {/* BOOTSTRAP CSS */}
      <link
        id="style"
        href="../assets/mamtai/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* STYLE CSS */}
      <link href="../assets/mamtai/style.css" rel="stylesheet" />
      <link href="../assets/mamtai/transparent-style.css" rel="stylesheet" />
      {/*- FONT-ICONS CSS */}
      <link href="../assets/mamtai/icons.css" rel="stylesheet" />
      {/* COLOR SKIN CSS */}
      <link
        id="theme"
        rel="stylesheet"
        type="text/css"
        media="all"
        href="../assets/mamtai/color1.css"
      />
      {/* BACKGROUND-IMAGE */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(237 249 228), rgb(136 210 239))",
        }}
      >
        {/* GLOABAL LOADER */}
        <div id="global-loader" style={{ display: "none" }}>
          <img
            src="../assets/mamtai/loader.svg"
            className="loader-img"
            alt="Loader"
          />
        </div>
        {/* /GLOABAL LOADER */}
        {/* PAGE */}
        <div className="page">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="col col-login">
                  <div className="text-center">
                    <img
                      src="../assets/mamtai/India-map-_1.png"
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                {/* CONTAINER OPEN */}
                <div className="col col-login">
                  <div className="text-center">
                    <img
                      src="../assets/mamtai/dettol-image.png"
                      className=""
                      alt=""
                      width="200px"
                    />
                  </div>
                </div>
                <div className="container-login100" style={{ height: "50%" }}>
                  <div className="wrap-login100 p-0">
                    <div className="card-body">
                      <form
                        className="login100-form validate-form"
                        method="post"
                        action="https://dho.rkskpeereducator.in/login-submit"
                        onSubmit={handleSubmit}
                      >
                        <span className="login100-form-title">Login</span>
                        <div
                          className="wrap-input100 validate-input"
                          data-bs-validate="Valid email is required: ex@abc.xyz"
                        >
                          <input
                            className="input100"
                            value={inputs.email}
                            type="text"
                            name="email"
                            placeholder="Email"
                            fdprocessedid="xztx2"
                            onChange={handleChange}
                            required
                          />
                          <span className="focus-input100" />
                          <span className="symbol-input100">
                            <i className="zmdi zmdi-email" aria-hidden="true" />
                          </span>
                        </div>
                        <div
                          className="wrap-input100 validate-input"
                          data-bs-validate="Password is required"
                        >
                          <input
                            className="input100"
                            type="password"
                            value={inputs.password}
                            name="password"
                            placeholder="Password"
                            required
                            fdprocessedid="7s0a2e"
                            onChange={handleChange}
                          />
                          <span className="focus-input100" />
                          <span className="symbol-input100">
                            <i className="zmdi zmdi-lock" aria-hidden="true" />
                          </span>
                        </div>
                        <span style={{ color: "red" }} />
                        <div className="container-login100-form-btn">
                          <input
                            type="submit"
                            className="login100-form-btn btn-success"
                            name="submit"
                            defaultValue="Submit"
                            fdprocessedid="35jdz6"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* CONTAINER CLOSED */}
              </div>
            </div>
          </div>
        </div>
        {/* End PAGE */}
      </div>
      {/* BACKGROUND-IMAGE CLOSED */}
      {/* JQUERY JS */}
      {/* BOOTSTRAP JS */}
      {/* Color Theme js */}
      {/* CUSTOM JS */}
      <editor-card
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "auto",
          display: "block !important",
        }}
      >
        <div dir="ltr" style={{ all: "initial" }}>
          <div
            style={{
              color: "initial",
              font: "initial",
              fontPalette: "initial",
              fontSynthesis: "initial",
              forcedColorAdjust: "initial",
              textOrientation: "initial",
              textRendering: "initial",
              WebkitFontSmoothing: "initial",
              WebkitLocale: "initial",
              WebkitTextOrientation: "initial",
              WebkitWritingMode: "initial",
              writingMode: "initial",
              zoom: "initial",
              accentColor: "initial",
              placeContent: "initial",
              placeItems: "initial",
              placeSelf: "initial",
              alignmentBaseline: "initial",
              animationComposition: "initial",
              animation: "initial",
              appRegion: "initial",
              appearance: "initial",
              aspectRatio: "initial",
              backdropFilter: "initial",
              backfaceVisibility: "initial",
              background: "initial",
              backgroundBlendMode: "initial",
              baselineShift: "initial",
              baselineSource: "initial",
              blockSize: "initial",
              borderBlock: "initial",
              border: "initial",
              borderRadius: "initial",
              borderCollapse: "initial",
              borderEndEndRadius: "initial",
              borderEndStartRadius: "initial",
              borderInline: "initial",
              borderStartEndRadius: "initial",
              borderStartStartRadius: "initial",
              inset: "initial",
              boxShadow: "initial",
              boxSizing: "initial",
              breakAfter: "initial",
              breakBefore: "initial",
              breakInside: "initial",
              bufferedRendering: "initial",
              captionSide: "initial",
              caretColor: "initial",
              clear: "initial",
              clip: "initial",
              clipPath: "initial",
              clipRule: "initial",
              colorInterpolation: "initial",
              colorInterpolationFilters: "initial",
              colorRendering: "initial",
              colorScheme: "initial",
              columns: "initial",
              columnFill: "initial",
              gap: "initial",
              columnRule: "initial",
              columnSpan: "initial",
              contain: "initial",
              containIntrinsicBlockSize: "initial",
              containIntrinsicSize: "initial",
              containIntrinsicInlineSize: "initial",
              container: "initial",
              content: "initial",
              contentVisibility: "initial",
              counterIncrement: "initial",
              counterReset: "initial",
              counterSet: "initial",
              cursor: "initial",
              cx: "initial",
              cy: "initial",
              d: "initial",
              display: "initial",
              dominantBaseline: "initial",
              emptyCells: "initial",
              fill: "initial",
              fillOpacity: "initial",
              fillRule: "initial",
              filter: "initial",
              flex: "initial",
              flexFlow: "initial",
              float: "initial",
              floodColor: "initial",
              floodOpacity: "initial",
              grid: "initial",
              gridArea: "initial",
              height: "initial",
              hyphenateCharacter: "initial",
              hyphenateLimitChars: "initial",
              hyphens: "initial",
              imageOrientation: "initial",
              imageRendering: "initial",
              initialLetter: "initial",
              inlineSize: "initial",
              insetBlock: "initial",
              insetInline: "initial",
              isolation: "initial",
              letterSpacing: "initial",
              lightingColor: "initial",
              lineBreak: "initial",
              listStyle: "initial",
              marginBlock: "initial",
              margin: "initial",
              marginInline: "initial",
              marker: "initial",
              mask: "initial",
              maskType: "initial",
              mathDepth: "initial",
              mathShift: "initial",
              mathStyle: "initial",
              maxBlockSize: "initial",
              maxHeight: "initial",
              maxInlineSize: "initial",
              maxWidth: "initial",
              minBlockSize: "initial",
              minHeight: "initial",
              minInlineSize: "initial",
              minWidth: "initial",
              mixBlendMode: "initial",
              objectFit: "initial",
              objectPosition: "initial",
              objectViewBox: "initial",
              offset: "initial",
              opacity: "initial",
              order: "initial",
              orphans: "initial",
              outline: "initial",
              outlineOffset: "initial",
              overflowAnchor: "initial",
              overflowClipMargin: "initial",
              overflowWrap: "initial",
              overflow: "initial",
              overlay: "initial",
              overscrollBehaviorBlock: "initial",
              overscrollBehaviorInline: "initial",
              overscrollBehavior: "initial",
              paddingBlock: "initial",
              padding: "initial",
              paddingInline: "initial",
              page: "initial",
              pageOrientation: "initial",
              paintOrder: "initial",
              perspective: "initial",
              perspectiveOrigin: "initial",
              pointerEvents: "initial",
              position: "absolute",
              quotes: "initial",
              r: "initial",
              resize: "initial",
              rotate: "initial",
              rubyPosition: "initial",
              rx: "initial",
              ry: "initial",
              scale: "initial",
              scrollBehavior: "initial",
              scrollMarginBlock: "initial",
              scrollMargin: "initial",
              scrollMarginInline: "initial",
              scrollPaddingBlock: "initial",
              scrollPadding: "initial",
              scrollPaddingInline: "initial",
              scrollSnapAlign: "initial",
              scrollSnapStop: "initial",
              scrollSnapType: "initial",
              scrollTimeline: "initial",
              scrollbarGutter: "initial",
              shapeImageThreshold: "initial",
              shapeMargin: "initial",
              shapeOutside: "initial",
              shapeRendering: "initial",
              size: "initial",
              speak: "initial",
              stopColor: "initial",
              stopOpacity: "initial",
              stroke: "initial",
              strokeDasharray: "initial",
              strokeDashoffset: "initial",
              strokeLinecap: "initial",
              strokeLinejoin: "initial",
              strokeMiterlimit: "initial",
              strokeOpacity: "initial",
              strokeWidth: "initial",
              tabSize: "initial",
              tableLayout: "initial",
              textAlign: "initial",
              textAlignLast: "initial",
              textAnchor: "initial",
              textCombineUpright: "initial",
              textDecoration: "initial",
              textDecorationSkipInk: "initial",
              textEmphasis: "initial",
              textEmphasisPosition: "initial",
              textIndent: "initial",
              textOverflow: "initial",
              textShadow: "initial",
              textSizeAdjust: "initial",
              textTransform: "initial",
              textUnderlineOffset: "initial",
              textUnderlinePosition: "initial",
              whiteSpace: "initial",
              timelineScope: "initial",
              touchAction: "initial",
              transform: "initial",
              transformBox: "initial",
              transformOrigin: "initial",
              transformStyle: "initial",
              transition: "initial",
              translate: "initial",
              userSelect: "initial",
              vectorEffect: "initial",
              verticalAlign: "initial",
              viewTimeline: "initial",
              viewTransitionName: "initial",
              visibility: "initial",
              borderSpacing: "initial",
              WebkitBoxAlign: "initial",
              WebkitBoxDecorationBreak: "initial",
              WebkitBoxDirection: "initial",
              WebkitBoxFlex: "initial",
              WebkitBoxOrdinalGroup: "initial",
              WebkitBoxOrient: "initial",
              WebkitBoxPack: "initial",
              WebkitBoxReflect: "initial",
              WebkitLineBreak: "initial",
              WebkitLineClamp: "initial",
              WebkitMaskBoxImage: "initial",
              WebkitMask: "initial",
              WebkitMaskComposite: "initial",
              WebkitPrintColorAdjust: "initial",
              WebkitRtlOrdering: "initial",
              WebkitRubyPosition: "initial",
              WebkitTapHighlightColor: "initial",
              WebkitTextCombine: "initial",
              WebkitTextDecorationsInEffect: "initial",
              WebkitTextFillColor: "initial",
              WebkitTextSecurity: "initial",
              WebkitTextStroke: "initial",
              WebkitUserDrag: "initial",
              WebkitUserModify: "initial",
              widows: "initial",
              width: "initial",
              willChange: "initial",
              wordBreak: "initial",
              wordSpacing: "initial",
              x: "initial",
              y: "initial",
              zIndex: 2147483647,
            }}
          >
            <link
              rel="stylesheet"
              href="chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/fonts/fabric-icons.css"
            />
            <div style={{ all: "initial" }}>
              <template shadowrootmode="open" />
            </div>
          </div>
          <div
            style={{
              color: "initial",
              font: "initial",
              fontPalette: "initial",
              fontSynthesis: "initial",
              forcedColorAdjust: "initial",
              textOrientation: "initial",
              textRendering: "initial",
              WebkitFontSmoothing: "initial",
              WebkitLocale: "initial",
              WebkitTextOrientation: "initial",
              WebkitWritingMode: "initial",
              writingMode: "initial",
              zoom: "initial",
              accentColor: "initial",
              placeContent: "initial",
              placeItems: "initial",
              placeSelf: "initial",
              alignmentBaseline: "initial",
              animationComposition: "initial",
              animation: "initial",
              appRegion: "initial",
              appearance: "initial",
              aspectRatio: "initial",
              backdropFilter: "initial",
              backfaceVisibility: "initial",
              background: "initial",
              backgroundBlendMode: "initial",
              baselineShift: "initial",
              baselineSource: "initial",
              blockSize: "initial",
              borderBlock: "initial",
              border: "initial",
              borderRadius: "initial",
              borderCollapse: "initial",
              borderEndEndRadius: "initial",
              borderEndStartRadius: "initial",
              borderInline: "initial",
              borderStartEndRadius: "initial",
              borderStartStartRadius: "initial",
              inset: "initial",
              boxShadow: "initial",
              boxSizing: "initial",
              breakAfter: "initial",
              breakBefore: "initial",
              breakInside: "initial",
              bufferedRendering: "initial",
              captionSide: "initial",
              caretColor: "initial",
              clear: "initial",
              clip: "initial",
              clipPath: "initial",
              clipRule: "initial",
              colorInterpolation: "initial",
              colorInterpolationFilters: "initial",
              colorRendering: "initial",
              colorScheme: "initial",
              columns: "initial",
              columnFill: "initial",
              gap: "initial",
              columnRule: "initial",
              columnSpan: "initial",
              contain: "initial",
              containIntrinsicBlockSize: "initial",
              containIntrinsicSize: "initial",
              containIntrinsicInlineSize: "initial",
              container: "initial",
              content: "initial",
              contentVisibility: "initial",
              counterIncrement: "initial",
              counterReset: "initial",
              counterSet: "initial",
              cursor: "initial",
              cx: "initial",
              cy: "initial",
              d: "initial",
              display: "initial",
              dominantBaseline: "initial",
              emptyCells: "initial",
              fill: "initial",
              fillOpacity: "initial",
              fillRule: "initial",
              filter: "initial",
              flex: "initial",
              flexFlow: "initial",
              float: "initial",
              floodColor: "initial",
              floodOpacity: "initial",
              grid: "initial",
              gridArea: "initial",
              height: "initial",
              hyphenateCharacter: "initial",
              hyphenateLimitChars: "initial",
              hyphens: "initial",
              imageOrientation: "initial",
              imageRendering: "initial",
              initialLetter: "initial",
              inlineSize: "initial",
              insetBlock: "initial",
              insetInline: "initial",
              isolation: "initial",
              letterSpacing: "initial",
              lightingColor: "initial",
              lineBreak: "initial",
              listStyle: "initial",
              marginBlock: "initial",
              margin: "initial",
              marginInline: "initial",
              marker: "initial",
              mask: "initial",
              maskType: "initial",
              mathDepth: "initial",
              mathShift: "initial",
              mathStyle: "initial",
              maxBlockSize: "initial",
              maxHeight: "initial",
              maxInlineSize: "initial",
              maxWidth: "initial",
              minBlockSize: "initial",
              minHeight: "initial",
              minInlineSize: "initial",
              minWidth: "initial",
              mixBlendMode: "initial",
              objectFit: "initial",
              objectPosition: "initial",
              objectViewBox: "initial",
              offset: "initial",
              opacity: "initial",
              order: "initial",
              orphans: "initial",
              outline: "initial",
              outlineOffset: "initial",
              overflowAnchor: "initial",
              overflowClipMargin: "initial",
              overflowWrap: "initial",
              overflow: "initial",
              overlay: "initial",
              overscrollBehaviorBlock: "initial",
              overscrollBehaviorInline: "initial",
              overscrollBehavior: "initial",
              paddingBlock: "initial",
              padding: "initial",
              paddingInline: "initial",
              page: "initial",
              pageOrientation: "initial",
              paintOrder: "initial",
              perspective: "initial",
              perspectiveOrigin: "initial",
              pointerEvents: "initial",
              position: "absolute",
              quotes: "initial",
              r: "initial",
              resize: "initial",
              rotate: "initial",
              rubyPosition: "initial",
              rx: "initial",
              ry: "initial",
              scale: "initial",
              scrollBehavior: "initial",
              scrollMarginBlock: "initial",
              scrollMargin: "initial",
              scrollMarginInline: "initial",
              scrollPaddingBlock: "initial",
              scrollPadding: "initial",
              scrollPaddingInline: "initial",
              scrollSnapAlign: "initial",
              scrollSnapStop: "initial",
              scrollSnapType: "initial",
              scrollTimeline: "initial",
              scrollbarGutter: "initial",
              shapeImageThreshold: "initial",
              shapeMargin: "initial",
              shapeOutside: "initial",
              shapeRendering: "initial",
              size: "initial",
              speak: "initial",
              stopColor: "initial",
              stopOpacity: "initial",
              stroke: "initial",
              strokeDasharray: "initial",
              strokeDashoffset: "initial",
              strokeLinecap: "initial",
              strokeLinejoin: "initial",
              strokeMiterlimit: "initial",
              strokeOpacity: "initial",
              strokeWidth: "initial",
              tabSize: "initial",
              tableLayout: "initial",
              textAlign: "initial",
              textAlignLast: "initial",
              textAnchor: "initial",
              textCombineUpright: "initial",
              textDecoration: "initial",
              textDecorationSkipInk: "initial",
              textEmphasis: "initial",
              textEmphasisPosition: "initial",
              textIndent: "initial",
              textOverflow: "initial",
              textShadow: "initial",
              textSizeAdjust: "initial",
              textTransform: "initial",
              textUnderlineOffset: "initial",
              textUnderlinePosition: "initial",
              whiteSpace: "initial",
              timelineScope: "initial",
              touchAction: "initial",
              transform: "initial",
              transformBox: "initial",
              transformOrigin: "initial",
              transformStyle: "initial",
              transition: "initial",
              translate: "initial",
              userSelect: "initial",
              vectorEffect: "initial",
              verticalAlign: "initial",
              viewTimeline: "initial",
              viewTransitionName: "initial",
              visibility: "initial",
              borderSpacing: "initial",
              WebkitBoxAlign: "initial",
              WebkitBoxDecorationBreak: "initial",
              WebkitBoxDirection: "initial",
              WebkitBoxFlex: "initial",
              WebkitBoxOrdinalGroup: "initial",
              WebkitBoxOrient: "initial",
              WebkitBoxPack: "initial",
              WebkitBoxReflect: "initial",
              WebkitLineBreak: "initial",
              WebkitLineClamp: "initial",
              WebkitMaskBoxImage: "initial",
              WebkitMask: "initial",
              WebkitMaskComposite: "initial",
              WebkitPrintColorAdjust: "initial",
              WebkitRtlOrdering: "initial",
              WebkitRubyPosition: "initial",
              WebkitTapHighlightColor: "initial",
              WebkitTextCombine: "initial",
              WebkitTextDecorationsInEffect: "initial",
              WebkitTextFillColor: "initial",
              WebkitTextSecurity: "initial",
              WebkitTextStroke: "initial",
              WebkitUserDrag: "initial",
              WebkitUserModify: "initial",
              widows: "initial",
              width: "initial",
              willChange: "initial",
              wordBreak: "initial",
              wordSpacing: "initial",
              x: "initial",
              y: "initial",
              zIndex: 2147483647,
            }}
          >
            <link
              rel="stylesheet"
              href="chrome-extension://gpaiobkfhnonedkhhfjpmhdalgeoebfa/fonts/fabric-icons.css"
            />
          </div>
          <div
            id="editorNotificationContainer"
            style={{
              color: "initial",
              font: "initial",
              fontPalette: "initial",
              fontSynthesis: "initial",
              forcedColorAdjust: "initial",
              textOrientation: "initial",
              textRendering: "initial",
              WebkitFontSmoothing: "initial",
              WebkitLocale: "initial",
              WebkitTextOrientation: "initial",
              WebkitWritingMode: "initial",
              writingMode: "initial",
              zoom: "initial",
              accentColor: "initial",
              placeContent: "initial",
              placeItems: "initial",
              placeSelf: "initial",
              alignmentBaseline: "initial",
              animationComposition: "initial",
              animation: "initial",
              appRegion: "initial",
              appearance: "initial",
              aspectRatio: "initial",
              backdropFilter: "initial",
              backfaceVisibility: "initial",
              background: "initial",
              backgroundBlendMode: "initial",
              baselineShift: "initial",
              baselineSource: "initial",
              blockSize: "initial",
              borderBlock: "initial",
              border: "initial",
              borderRadius: "initial",
              borderCollapse: "initial",
              borderEndEndRadius: "initial",
              borderEndStartRadius: "initial",
              borderInline: "initial",
              borderStartEndRadius: "initial",
              borderStartStartRadius: "initial",
              bottom: 0,
              boxShadow: "initial",
              boxSizing: "initial",
              breakAfter: "initial",
              breakBefore: "initial",
              breakInside: "initial",
              bufferedRendering: "initial",
              captionSide: "initial",
              caretColor: "initial",
              clear: "initial",
              clip: "initial",
              clipPath: "initial",
              clipRule: "initial",
              colorInterpolation: "initial",
              colorInterpolationFilters: "initial",
              colorRendering: "initial",
              colorScheme: "initial",
              columns: "initial",
              columnFill: "initial",
              gap: "initial",
              columnRule: "initial",
              columnSpan: "initial",
              contain: "initial",
              containIntrinsicBlockSize: "initial",
              containIntrinsicSize: "initial",
              containIntrinsicInlineSize: "initial",
              container: "initial",
              content: "initial",
              contentVisibility: "initial",
              counterIncrement: "initial",
              counterReset: "initial",
              counterSet: "initial",
              cursor: "initial",
              cx: "initial",
              cy: "initial",
              d: "initial",
              display: "flex",
              dominantBaseline: "initial",
              emptyCells: "initial",
              fill: "initial",
              fillOpacity: "initial",
              fillRule: "initial",
              filter: "initial",
              flex: "initial",
              flexDirection: "column-reverse",
              flexWrap: "initial",
              float: "initial",
              floodColor: "initial",
              floodOpacity: "initial",
              grid: "initial",
              gridArea: "initial",
              height: "initial",
              hyphenateCharacter: "initial",
              hyphenateLimitChars: "initial",
              hyphens: "initial",
              imageOrientation: "initial",
              imageRendering: "initial",
              initialLetter: "initial",
              inlineSize: "initial",
              insetBlock: "initial",
              insetInline: "initial",
              isolation: "initial",
              left: "initial",
              letterSpacing: "initial",
              lightingColor: "initial",
              lineBreak: "initial",
              listStyle: "initial",
              marginBlock: "initial",
              margin: "1em",
              marginInline: "initial",
              marker: "initial",
              mask: "initial",
              maskType: "initial",
              mathDepth: "initial",
              mathShift: "initial",
              mathStyle: "initial",
              maxBlockSize: "initial",
              maxHeight: "initial",
              maxInlineSize: "initial",
              maxWidth: "initial",
              minBlockSize: "initial",
              minHeight: "initial",
              minInlineSize: "initial",
              minWidth: "initial",
              mixBlendMode: "initial",
              objectFit: "initial",
              objectPosition: "initial",
              objectViewBox: "initial",
              offset: "initial",
              opacity: "initial",
              order: "initial",
              orphans: "initial",
              outline: "initial",
              outlineOffset: "initial",
              overflowAnchor: "initial",
              overflowClipMargin: "initial",
              overflowWrap: "initial",
              overflow: "initial",
              overlay: "initial",
              overscrollBehaviorBlock: "initial",
              overscrollBehaviorInline: "initial",
              overscrollBehavior: "initial",
              paddingBlock: "initial",
              padding: "initial",
              paddingInline: "initial",
              page: "initial",
              pageOrientation: "initial",
              paintOrder: "initial",
              perspective: "initial",
              perspectiveOrigin: "initial",
              pointerEvents: "initial",
              position: "fixed",
              quotes: "initial",
              r: "initial",
              resize: "initial",
              right: 0,
              rotate: "initial",
              rubyPosition: "initial",
              rx: "initial",
              ry: "initial",
              scale: "initial",
              scrollBehavior: "initial",
              scrollMarginBlock: "initial",
              scrollMargin: "initial",
              scrollMarginInline: "initial",
              scrollPaddingBlock: "initial",
              scrollPadding: "initial",
              scrollPaddingInline: "initial",
              scrollSnapAlign: "initial",
              scrollSnapStop: "initial",
              scrollSnapType: "initial",
              scrollTimeline: "initial",
              scrollbarGutter: "initial",
              shapeImageThreshold: "initial",
              shapeMargin: "initial",
              shapeOutside: "initial",
              shapeRendering: "initial",
              size: "initial",
              speak: "initial",
              stopColor: "initial",
              stopOpacity: "initial",
              stroke: "initial",
              strokeDasharray: "initial",
              strokeDashoffset: "initial",
              strokeLinecap: "initial",
              strokeLinejoin: "initial",
              strokeMiterlimit: "initial",
              strokeOpacity: "initial",
              strokeWidth: "initial",
              tabSize: "initial",
              tableLayout: "initial",
              textAlign: "initial",
              textAlignLast: "initial",
              textAnchor: "initial",
              textCombineUpright: "initial",
              textDecoration: "initial",
              textDecorationSkipInk: "initial",
              textEmphasis: "initial",
              textEmphasisPosition: "initial",
              textIndent: "initial",
              textOverflow: "initial",
              textShadow: "initial",
              textSizeAdjust: "initial",
              textTransform: "initial",
              textUnderlineOffset: "initial",
              textUnderlinePosition: "initial",
              whiteSpace: "initial",
              timelineScope: "initial",
              top: "initial",
              touchAction: "initial",
              transform: "initial",
              transformBox: "initial",
              transformOrigin: "initial",
              transformStyle: "initial",
              transition: "initial",
              translate: "initial",
              userSelect: "initial",
              vectorEffect: "initial",
              verticalAlign: "initial",
              viewTimeline: "initial",
              viewTransitionName: "initial",
              visibility: "initial",
              borderSpacing: "initial",
              WebkitBoxAlign: "initial",
              WebkitBoxDecorationBreak: "initial",
              WebkitBoxDirection: "initial",
              WebkitBoxFlex: "initial",
              WebkitBoxOrdinalGroup: "initial",
              WebkitBoxOrient: "initial",
              WebkitBoxPack: "initial",
              WebkitBoxReflect: "initial",
              WebkitLineBreak: "initial",
              WebkitLineClamp: "initial",
              WebkitMaskBoxImage: "initial",
              WebkitMask: "initial",
              WebkitMaskComposite: "initial",
              WebkitPrintColorAdjust: "initial",
              WebkitRtlOrdering: "initial",
              WebkitRubyPosition: "initial",
              WebkitTapHighlightColor: "initial",
              WebkitTextCombine: "initial",
              WebkitTextDecorationsInEffect: "initial",
              WebkitTextFillColor: "initial",
              WebkitTextSecurity: "initial",
              WebkitTextStroke: "initial",
              WebkitUserDrag: "initial",
              WebkitUserModify: "initial",
              widows: "initial",
              width: "initial",
              willChange: "initial",
              wordBreak: "initial",
              wordSpacing: "initial",
              x: "initial",
              y: "initial",
              zIndex: 2147483647,
            }}
          />
        </div>
      </editor-card>
    </>
  );
};

export default Login2;
