import React, { useEffect, useState } from "react";
import ShowQuiz from "../../pages/AdminDashboard/ShowQuiz/ShowQuiz";
import { Link, Navigate } from "react-router-dom";
import AddCategory from "../../pages/AdminDashboard/AddCategory/AddCategory";
import { deleteCategoryById, getCategoryById } from "../../apis/admin/adminApi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import UpgradeSharpIcon from "@mui/icons-material/UpgradeSharp";
import { useNavigate } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PrintCurrQuestion from "./PrintCurrQuestion";

// const PrintTable = ({ categories }) => {
//   return (
//     <>
//       {categories.map((curUser) => {
//         const { _id, title, description } = curUser;

//         return (
//           <tr key={_id}>
//             <td>{title}</td>
//             <td>{description}</td>
//           </tr>
//         );
//       })}
//     </>
//   );
// };

const PrintTable = ({ categories }) => {
  const navigate = useNavigate();

  const onViweClick = (id) => {
    navigate("/user/showQuizByCategory", { state: { categoryId: id } });
  };

  const onDeleteClick = (categoryId) => {
    alert(categoryId);
    deleteCategoryById(categoryId).then((data) => {
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else alert("Congrats Deleted Successfully");
    });
  };

  return (
    <>
      {categories.map((curUser) => {
        const { _id, title, description } = curUser;

        return (
          <div>
            <Card sx={{ m: 3 }}>
              <CardMedia
                sx={{ height: 150, width: 320 }}
                image="https://wallpapercave.com/wp/wp7250087.jpg"
                title="Quiz Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="success"
                  sx={{ ml: "40%", fontSize: 16 }}
                  startIcon={<RemoveRedEyeSharpIcon />}
                  onClick={() => onViweClick(_id)}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </>
  );
};

const PrintQuizTable = ({ quizzes }) => {
  const navigate = useNavigate();

  const attemptQuizHandler = (_id) => {
    navigate(`/quiz/attemptQuiz/${_id}`, {});
  };

  return (
    <>
      {quizzes.map((curUser) => {
        const {
          _id,
          active,
          title,
          description,
          maxMarks,
          numberOfQuestions,
          category,
          createdAt,
        } = curUser;

        console.log(curUser);

        return (
          <Card sx={{ minWidth: 275, m: 2 }} key={_id}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Category : {category}
              </Typography>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
              </Typography>
              <Typography color="green">Max Marks: {maxMarks}</Typography>
              <Typography color="error">
                Number of Questions: {numberOfQuestions}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => attemptQuizHandler(_id)}
                startIcon={<PlayArrowIcon />}
              >
                Attempt Quiz
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

const PrintQuizTableUser = ({ quizzes }) => {
  return (
    <>
      {quizzes.map((curUser) => {
        const {
          _id,
          title,
          description,
          maxMarks,
          numberOfQuestions,
          category,
          createdAt,
        } = curUser;
        return (
          <tr key={_id}>
            <td>{title}</td>
            <td>{description}</td>
            <td>{maxMarks}</td>
            <td>{numberOfQuestions}</td>
            <td>{category}</td>
            <td>{createdAt}</td>
            <td>
              <Link to={`/quiz/attemptQuiz/${_id}`}>
                <button>Attempt Quiz</button>
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};

const PrintQuestionTable = ({ questions }) => {
  let i = 0;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {questions.map((currQuestion) => {
        i++;
        const {
          _id,
          content,
          optionA,
          optionB,
          optionC,
          optionD,
          correctAnswer,
        } = currQuestion;

        return (
          <List
            sx={{ width: "90%", pl: 30, mb: 5, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <Typography
                component="div"
                id="nested-list-subheader"
                variant="h5"
              >
                {i}. {content}
              </Typography>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">A{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionA}</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">B{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionB}</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">C{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionC}</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">D{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionD}</Typography>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {open ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </ListItemIcon>
              <Typography variant="h6" sx={{ mr: 2 }}>
                Correct Answer
              </Typography>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <Typography variant="h6" color="green" sx={{ mr: 2 }}>
                    {correctAnswer}
                  </Typography>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton sx={{ ml: 120 }}>
              <ListItemIcon>
                <DeleteIcon sx={{ color: "red" }} />
              </ListItemIcon>
            </ListItemButton>
          </List>
        );
      })}
    </>
  );
};

const PrintQuestionTableUser = ({ questions }) => {
  return (
    <>
      {questions.map((currQuestion) => {
        const { _id, content, optionA, optionB, optionC, optionD } =
          currQuestion;

        return (
          <tr key={_id}>
            <td>{content}</td>
            <td>{optionA}</td>
            <td>{optionB}</td>
            <td>{optionC}</td>
            <td>{optionD}</td>
          </tr>
        );
      })}
    </>
  );
};

const PrintQuestions = (props) => {
  // let selectedValue = new Array(questions.length).fill('-');

  // const handleSelectedValue = ({i,ans}) => {
  //   selectedValue[i] = ans;
  //   console.log(selectedValue);
  // }

  // useEffect(()=>{
  //   setSelectedValue(Array(questions.length).fill('N'));
  // },[])

  const questions = props.questions;

  const [value, setValue] = useState("");

  // const {content,optionA,optionB,optionC,optionD,correctAnswer} = currQuestion;

  const handleChange = (data) => (event) => {
    const { key, value } = data;

    // selectedValue[key] = event.target.value;
    console.log(questions);
    // console.log(data)

    // setValue(event.target.value);
  };

  console.log(questions);

  return (
    <>
      {questions.map((currQuestion, i) => {
        const {
          _id,
          content,
          optionA,
          optionB,
          optionC,
          optionD,
          correctAnswer,
        } = currQuestion;
        // return <h2>Hello World</h2>
        return (
          <PrintCurrQuestion
            currQuestion={currQuestion}
            handleSelectedValue={props.handleSelectedValue}
            i={i}
          />
        );
      })}
    </>
  );
};

const PrintCompletedTest = (props) => {
  console.log(props.tests);

  const navigate = useNavigate();

  const onviewClick = (data)=> {
    navigate(`/view/attempt`, {state : {user_answers :data.user_answers, quizId: data.quiz}})
  }

  return (
    <>
      {props.tests.map((test) => {
        const { _id, quiz, user_answers } = test;

        {
          return (
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Quiz Id : {quiz}
              </Typography>
              <Typography variant="h5" component="div">
                Completed Quiz 
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Button
                  // color="success"
                  sx={{ ml: "5%", fontSize: 16 }}
                  startIcon={<RemoveRedEyeSharpIcon />}
                  onClick={() => onviewClick({quiz,user_answers})}
                >
                  View
                </Button>
            </CardContent>
          );
        }
      })}
    </>
  );
};


const PrintCompletedTestDetails = ({questions, user_answers}) => {


  console.log(questions, user_answers);

  let i = 0;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {questions.map((currQuestion, i) => {
        i++;
        const {
          _id,
          content,
          optionA,
          optionB,
          optionC,
          optionD,
          correctAnswer,
        } = currQuestion;

        return (
          <List
            sx={{ width: "90%", pl: 30, mb: 5, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <Typography
                component="div"
                id="nested-list-subheader"
                variant="h5"
              >
                {i}. {content}
              </Typography>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">A{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionA}</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">B{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionB}</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">C{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionC}</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Typography variant="h6">D{")"}</Typography>
              </ListItemIcon>
              <Typography variant="h6">{optionD}</Typography>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {open ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </ListItemIcon>
              <Typography variant="h6" sx={{ mr: 2 }}>
                View Answers
              </Typography>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <Typography variant="h6" color="green" sx={{ mr: 2 }}>
                    Correct Answer : {correctAnswer}
                  </Typography>
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: correctAnswer==user_answers[i] ? "green" : "red" }} />
                  </ListItemIcon>
                  <Typography variant="h6" color="green" sx={{ mr: 2 }}>
                    Your answer : {user_answers[i]}
                  </Typography>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        );
      })}
    </>
  );
}

export {
  PrintTable,
  PrintQuizTable,
  PrintQuizTableUser,
  PrintQuestionTable,
  PrintQuestionTableUser,
  PrintQuestions,
  PrintCompletedTest,
  PrintCompletedTestDetails
};
