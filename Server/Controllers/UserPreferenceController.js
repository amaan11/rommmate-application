import express from 'express'
import moment from 'moment'
import { UserPreference } from '../Models/UserPreference';

const router = express.Router()

router.get('/user-preference', async (req, res, next) => {
    const { userId } = req.body

    await UserPreference.findOne({
        where: {
            user_id: userId
        }
    })
        .then(response => {
            if (!response) {
                return res.status(500).json({ error: { message: 'Could not fetch details!' } })
            }
            else {
                return res.status(200).json({ isSucess: true, data: response })
            }
        })
})
router.post('/store-user-preferences', async (req, res, next) => {
    const { userId } = req.body

    await UserPreference.create({
        user_id: userId,
        max_rent: req.body.maxRent ? req.body.maxRent : 0,
        movein_date: req.body.movein_date ? moment(req.body.movein_date).format('x') : moment(),
        type_of_place: req.body.placeType ? req.body.placeType : '',
        place_location: req.body.location ? req.body.location : '',
        cleaning_apartment: req.body.cleaningApartment ? req.body.cleaningApartment : '',
        guests: req.body.guests ? req.body.guests : '',
        pets: req.body.pets ? req.body.pets : '',
        smoking: req.body.smoking ? req.body.smoking : '',
        interests: req.body.interests && req.body.interests.length > 0 ? req.body.interests : '',
    })
        .then(response => {
            if (!response) {
                return res.status(500).json({ isSucess: false, data: 'Something went wrong!' })
            }
            else {
                return res.status(200).json({ isSucess: true, data: 'Successfuly Created!' })

            }

        })
})
export default router

