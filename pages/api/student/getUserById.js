import dbConnect from '../../../utils/dbConnect'
import Users from '../../../models/User'

export default async function handler(req, res) {
    const {
        body: { user,pass },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {

                const users = await Users.findById('5f03069342bdfa10c2e3bd23');/* find all the data in our database */
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
