<template>
    <b-modal id="square-modal" class="border-0" size="lg">
        <template #modal-title>
            <div class="square-user-info">
                <img src="/user-placeholder.jpg" alt="mdo" width="32" height="32"
                    class="rounded-circle">
                <span>Kaplan Arkan</span>
            </div>
        </template>
        <div class="d-block text-center">
            <textarea type="text" class="idea-text" placeholder="Belge ya da fikir paylaşın.."></textarea>
        </div>
        <template #modal-footer>
            <div class="square-footer">
                <div class="form-grb">
                    <label for="file"><i class="far fa-copy"></i></label>
                    <input type="file" name="file" class="file" id="file">
                    <select name="" class="select-section">
                        <option value="">Tüm Bölümlere</option>
                    </select>
                </div>
                <button class="btn btn-primary">Yayınla</button>
            </div>
        </template>
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            options: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]
        }
    },
}
</script>

<style lang="scss">
// .modal-content {
//     border: 0;
//     border-radius: 2px;
// }

// .modal-header {
//     border: 0;
// }

.square-user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
        font-size: 14px;
        color: royalblue;
        font-weight: 400;
    }
}
.square-footer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        border-radius: 4px;
        text-transform: uppercase;
        font-size: 14px;
    }
    .form-grb{
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        label{
            padding: 6px 12px;
            background-color: #e1e4e6;
            border-radius: 4px;
        }
        .file{
            display: none;
        }
        .select-section{
            font-size: 14px;
            padding: 6px 12px;
            border: 1px solid #e1e4e6;
            width: 70%;
            border-radius: 4px;
            &:focus{
                outline: none;
            }
        }
    }
}
.idea-text {
    width: 100%;
    border: 0;

    &::placeholder {
        font-weight: 400;
        color: #b0c0d4;
    }

    &:focus {
        outline: none;
    }
}
</style>