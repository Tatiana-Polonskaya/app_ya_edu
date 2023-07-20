import ProgressBar from "../Progressbar";
import { cn } from "@bem-react/classname";

import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
} from "react-speedometer";

import "./style.scss";

import mirco from "./assets/mircophon.svg";
import legend from "./assets/legend.svg";
import face from "./assets/face.svg";
import talant from "./assets/talant.svg";
import speaker from "./assets/speaker.svg";

import Frame1 from "./assets/Frame1.svg";
import Frame2 from "./assets/Frame2.svg";
import Frame3 from "./assets/Frame3.svg";
import Frame4 from "./assets/Frame4.svg";
import Frame5 from "./assets/Frame5.svg";

import noteSvg from "./assets/note.svg";

import { ReactSVG } from "react-svg";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useEffect, useState } from "react";
import TotalData from "./total.json";
import { TotalDataItem, TotalType } from "./total";
import GraphColor from "../../models/_colors";
import { useParams } from "react-router-dom";

function getPictureByConclusion(conclusion: string) {
  switch (conclusion) {
    case "Новичок на сцене":
      return face;
    case "Постепенно преодолевающий себя оратор":
      return mirco;
    case "Растущий талант выступлений":
      return talant;
    case "Уверенный спикер":
      return speaker;
    case "Легенда выступлений":
      return legend;
    default:
      return mirco;
  }
}

export function convertTotalData(
  values: TotalDataItem,
  param: TotalType | null = null
) {
  return Object.values(TotalType);
}

export const getTotalTitle = (value: string): string => {
  switch (value) {
    case "connectedness":
      return "связность";
    case "argumentativeness":
      return "аргументированность";
    case "clarity":
      return "ясность";
    case "dynamism":
      return "динамизм";
    case "persuasiveness":
      return "убедительность";
    case "communicative":
      return `соблюдение \n
			коммуникативной нормы`;
    default:
      return "";
  }
};

export const getTotalResult = (value: number): string[] => {
  if (value < 20) {
    return [GraphColor.SPURPLE, Frame1, "Ужасно"];
  } else if (value < 40) {
    return [GraphColor.SORANGE, Frame2, "Плохо"];
  } else if (value < 60) {
    return [GraphColor.SYELLOW, Frame3, "Средне"];
  } else if (value < 80) {
    return [GraphColor.SGREEN, Frame4, "Хорошо"];
  } else {
    return [GraphColor.SBLUE, Frame5, "Великолепно"];
  }
};
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const DECIMAL = 2;

export default function CommonAnalitics() {
  const cnCommon = cn("CommonAnalitics");

  const params = useParams();

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const totalData = TotalData.data.values;

  const [speedArr, setSpeedArr] = useState<TotalType[]>(
    convertTotalData(TotalData.data.values)
  );

  return (
    <div className={cnCommon("col")}>
<div className={cnCommon("row")}>
        <span className={cnCommon("title-big")}>
          {/* <ReactSVG src={noteSvg} className={cnCommon("title-icon")} /> */}
          Область будущего
        </span>
      </div>


      <Box sx={{ flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",

                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>

      <div className={cnCommon("row")}>
        <span className={cnCommon("title")}>
          <ReactSVG src={noteSvg} className={cnCommon("title-icon")} />
          Общая статистика
        </span>
      </div>

      <div className={cnCommon("panel")}>
        {speedArr &&
          totalData &&
          speedArr.map((element, ind) => (
            <div key={ind} className={cnCommon("item")}>
              <Speedometer
                value={totalData[element]}
                width={165}
                height={110}
                // height={165}
                min={0}
                max={100}
                angle={180}
              >
                {/* фон */}
                <Background angle={180} color="#FFF" />
                {/* шкала от 0 до последнего значение */}
                <Arc
                  color={"#D9E0EF"}
                  opacity={1}
                  arcWidth={25}
                  // lineCap={}
                />
                {/* шкала заполнения */}
                <Progress
                  color={getTotalResult(totalData[element])[0]}
                  arcWidth={25}
                />
                <svg width="230" height="165">
                  <line
                    x1="142"
                    y1="0"
                    x2="82.5"
                    y2="82.5"
                    stroke="#FFF"
                    strokeWidth="1"
                  />
                  <line
                    x1="165"
                    y1="56"
                    x2="82.5"
                    y2="82.5"
                    stroke="#FFF"
                    strokeWidth="1"
                  />
                  <line
                    x1="165"
                    y1="109"
                    x2="82.5"
                    y2="82.5"
                    stroke="#FFF"
                    strokeWidth="1"
                  />
                  <line
                    x1="142"
                    y1="165"
                    x2="82.5"
                    y2="82.5"
                    stroke="#FFF"
                    strokeWidth="1"
                  />
                  {/* стрелка */}
                  <Needle
                    offset={35}
                    baseWidth={12}
                    // baseOffset={-30}
                    baseOffset={0}
                    color={"#7C8EB5"}
                    circleRadius={0}
                  />
                </svg>
              </Speedometer>
              <div className={cnCommon("icon")}>
                <ReactSVG src={getTotalResult(totalData[element])[1]} />
              </div>
              <div className={cnCommon("smile-title")}>
                {getTotalTitle(element)}
              </div>
              <div
                className={cnCommon("percent")}
                style={{
                  color: getTotalResult(totalData[element])[0],
                }}
              >{`${totalData ? totalData[element] : 0}%`}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
