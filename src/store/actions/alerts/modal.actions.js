export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_MODAL_INIT = 'SHOW_MODAL_INIT';

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