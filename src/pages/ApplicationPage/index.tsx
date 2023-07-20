import MainLayout from "../../layouts/MainLayout";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { cn } from "@bem-react/classname";

import "./styles.scss";
import ArchiveSearch from "../../components/ArchiveSearch";
import { useState } from "react";
import { ReactSVG } from "react-svg";

import worningIcon from "./icons/danger.svg";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import Rating from "@mui/material/Rating";

const stepInProgress = [
  {
    label: "Подпишись на новости группы",
    description: `Для оперативного реагирования на новости и изменения тебе необходимо подписаться на ВК группу, по адресу ...`,
  },
  {
    label: "Собери пакет документов",
    description:
      "Чтобы принять участие, тебе необходимо распечать и заполнить заявку по адресу https://...",
  },
  {
    label: "Отправь собранные документы",
    description: `Отправь подготовленные документы на почту организатору example@gmail.com (В теме письма название мероприятия). `,
  },
];

const stepFail = [
  {
    label: "Подпишись на новости группы ",
    description: `Все новости и изменения по курсу находятся в группе в Вконтакте: https://vk.com/catism`,
  },
  {
    label: "Доготовь мотивационное письмо до 23:59 28 июня",
    description:
      'Для оценки твоих компетенций и мотивации подготовь мотивационное письмо на тему "Чему я хочу научиться на курсе" и отправь его на почту организатору: example@mail.ru',
  },
  {
    label: "Заполни анкету ",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const messageAim = "Не забудь выполнить все задания до дедлайна";

const questions = [
  "Как ты оцениваешь образовательную программу форума?",
  "Как ты оцениваешь культурную программу форума?",
  "Насколько удобно тебе было общаться с волонтерами и организаторами через установленные средства связи?",
  "Насколько подходящая была площадка проведения?",
  "Было ли возможно выполнять поставленные требования на форуме?",
];

const isStepFailed = 1;

export default function ApplicationPage() {
  const cnApplication = cn("apllication");

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [valuesRating, setValueRating] = useState([0, 0, 0, 0, 0]);

  const setNewValueById = (newvalue: number, position: number) => {
    let temp = [...valuesRating];
    temp[position] = newvalue;
    setValueRating(temp);
  };

  return (
    <MainLayout>
      <div>
        <ArchiveSearch updateSearch={() => {}} />
        <div className={cnApplication("date")}>Август</div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <div className={cnApplication("header")}>
              <div className={cnApplication("header-title")}>
                Форум молодых предпринимателей
              </div>
              <div className={cnApplication("header-message")}>
                <span className={cnApplication("header-message-text")}>
                  <ReactSVG src={worningIcon} />
                  {messageAim}
                </span>
              </div>
              <div
                className={cnApplication("header-status")}
                style={{ backgroundColor: "#F4EC1C" }}
              >
                Заявка подана
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Stepper activeStep={activeStep} orientation="vertical">
                {stepInProgress.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      
                    >
                      <div className={cnApplication("title-bold")}>{step.label}</div>
                    </StepLabel>
                    <StepContent>
                      <Typography><div className={cnApplication("title")}>{step.description}</div></Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === stepInProgress.length - 1
                              ? "Завершить"
                              : "Далее"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Назад
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === stepInProgress.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    Ты выполнил все задания, так держать! Ожидай ответа
                    организатора и следи за своим статус.
                  </Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Назад
                  </Button>
                </Paper>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
        <div className={cnApplication("date")}>Июль</div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={cnApplication("header")}>
              <div className={cnApplication("header-title")}>
                Область будущего
              </div>
              <div
                className={cnApplication("header-status")}
                style={{ backgroundColor: "#0CCA14" }}
              >
                Заявка принята
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className={cnApplication("title-bold")}>
              Побывал на форуме? Оставь небольшой отзыв, это займет не более 2-х
              минут
            </div>
            <div>
              {questions.map((el, idx) => (
                <div className={cnApplication("row")}>
                  <span  className={cnApplication("title")}>
                    {idx + 1}. {el}
                  </span>{" "}
                  <Rating
                    name="simple-controlled"
                    onChange={(event, newValue) => {
                      if (newValue) setNewValueById(newValue, idx);
                    }}
                  />
                </div>
              ))}

              <MobileStepper
                variant="dots"
                steps={2}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === 5}
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
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={cnApplication("header")}>
              <div className={cnApplication("header-title")}>
                Курс SMM для начинающих
              </div>
              <div
                className={cnApplication("header-status")}
                style={{ backgroundColor: "#FE5D74" }}
              >
                Отказано
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Stepper activeStep={activeStep} orientation="vertical">
                {stepFail.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      
                      error={isStepFailed === index}
                    >
                      <div className={cnApplication("title-bold")}>{step.label}</div>
                      
                    </StepLabel>

                    <StepContent>
                    <Typography><div className={cnApplication("title")}>{step.description}</div></Typography>
                      {isStepFailed === index && (
                        <div className={cnApplication("header-message-text")}>
                          Упс, кажется поздно!
                        </div>
                      )}
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                            disabled={isStepFailed === index}
                          >
                            {index === stepFail.length - 1
                              ? "Завершить"
                              : "Далее"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Назад
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === stepFail.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </MainLayout>
  );
}
