import dbConnect from '../../../utils/dbConnect'
import Files from '../../../models/Files'

export default async function handler(req, res) {
    const {
        body: { user,pass },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {

                const users = await Files.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: users })
            } catch (error) {

                res.status(400).json({ success: false, error: error})
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
