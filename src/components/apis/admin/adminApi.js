import { API } from "../../../config";

export const addCategory = (token, category) => {
    return fetch(`${API}/category/create`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getCategories = (token) => {
    return fetch(`${API}/category/categories`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}


export const getContactUs = (token) => {
    return fetch(`${API}/contactUs/getContactUs`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getCategoryById = (id) => {
    return fetch(`${API}/category/${id}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getQuizById = (id, token) => {
    return fetch(`${API}/quiz/get/${id}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getQuizByCategoryId = (categoryId, token) => {
    return fetch(`${API}/quiz/byCategory/${categoryId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const addQuiz = (quiz, token) => {
    return fetch(`${API}/quiz/create`, {
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(quiz)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const showQuizzes = (token) => {
    return fetch(`${API}/quiz/showQuizzes`, {
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const showQuestions = (quizId, token) => {
    return fetch(`${API}/question/byQuiz/${quizId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const addQuestion = (question, token) => {
    return fetch(`${API}/question/create`, {
        method:'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(question)
    }).then(response => {
        return  response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const deleteCategoryById = (categoryId) => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'DELETE'
    }).then(response=> {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}

export const deleteQuestionById = (questionId) => {
    return fetch(`${API}/question/${questionId}`, {
        method: 'DELETE'
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}


export const saveCompletedTest = (token, data) => {
    return fetch(`${API}/completedTest/save`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}

export const viewCompletedTest= (token, userId) => {
    return fetch(`${API}/completedTest/view/${userId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}

export const saveStudyMaterial = (data, token) => {
    return fetch(`${API}/studyMaterials/save`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}

export const getAllStudyMaterials = () => {
    return fetch(`${API}/studyMaterials/listAll`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getBooksBySem = (year) => {
    return fetch(`${API}/studyMaterials/listBooksBySem/${year}`,{
        method:"GET"
    } ).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getStudyMaterialsBytype = ({year,type}) => {
    return fetch(`${API}/studyMaterials/listStudyMaterialByType/${year}/${type}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const contactUsPost = (contactUs) => {
    return fetch(`${API}/contactUs/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactUs),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error(err);
      });
  };