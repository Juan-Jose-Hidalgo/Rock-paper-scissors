type ClassType = {
    [key: string]: string;
};

const btnClass: ClassType = {
    paper: 'board__btn board__btn--paper',
    scissors: 'board__btn board__btn--scissors',
    rock: 'board__btn board__btn--rock',
    lizard: 'board__btn board__btn--lizard',
    spock: 'board__btn board__btn--spock'
}


export const getBtnClass = (name: string) => {
    return btnClass[name] || 'board__btn board__btn--none';
}