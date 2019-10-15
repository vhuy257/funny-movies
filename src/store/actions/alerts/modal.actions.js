export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_MODAL_INIT = 'SHOW_MODAL_INIT';

export const HIDE_MODAL_MOVIES = "HIDE_MODAL_MOVIES";
export const SHOW_MODAL_MOVIES = "SHOW_MODAL_MOVIES";

export function hideModal()
{
    return {
        type: HIDE_MODAL
    }
}

export function showModal()
{
    return {
        type: SHOW_MODAL,
    }
}

export function hideModalMovies() {
    return {
        type: HIDE_MODAL_MOVIES
    }
}

export function showModalMovies()
{
    return {
        type: SHOW_MODAL_MOVIES
    }
}