import dbConnect from '../../../utils/dbConnect'
import Files from '../../../models/Files'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {

        case 'POST':
            try {
                const pet = await Files.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: pet })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
