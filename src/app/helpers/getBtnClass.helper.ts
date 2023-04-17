type ClassType = {
    [key: string]: string;
};

const btnClass: ClassType = {
    paper: 'board__btn board__btn--paper',
    scissors: 'board__btn board__btn--scissors',
    rock: 'board__btn board__btn--rock',
}


export const getBtnClass = (name: string) => {
    return btnClass[name];
}