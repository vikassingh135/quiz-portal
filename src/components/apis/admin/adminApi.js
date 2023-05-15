import { API } from "../../../config";

export const addCategory = (category) => {
    return fetch(`${API}/category/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getCategories = () => {
    return fetch(`${API}/category/categories`, {
        method: 'GET',
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

export const getQuizById = (id) => {
    return fetch(`${API}/quiz/get/${id}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const getQuizByCategoryId = (categoryId) => {
    return fetch(`${API}/quiz/byCategory/${categoryId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const addQuiz = (quiz) => {
    return fetch(`${API}/quiz/create`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quiz)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const showQuizzes = () => {
    return fetch(`${API}/quiz/showQuizzes`, {
        method:'GET',
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const showQuestions = (quizId) => {
    return fetch(`${API}/question/byQuiz/${quizId}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
    })
}

export const addQuestion = (question) => {
    return fetch(`${API}/question/create`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
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


export const saveCompletedTest = (data) => {
    return fetch(`${API}/completedTest/save`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}

export const viewCompletedTest= (userId) => {
    return fetch(`${API}/completedTest/view/${userId}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.error(error);
    })
}

export const saveStudyMaterial = (data) => {
    return fetch(`${API}/studyMaterials/save`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
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