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