import fileUpload, { FileArray, UploadedFile } from "express-fileupload";
import path from "path";

class FileHandler {
    save (file: UploadedFile) {
        const fileName = Date.now() + path.extname(file.name)
        file.mv(path.resolve(__dirname, '..', '..', 'src', 'static', fileName))
        return fileName
    }
}

export default new FileHandler()