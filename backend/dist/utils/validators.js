import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    console.log("jai mata ji ki");
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            res.status(422).json({ errors: errors.array() });
        }
    };
};
export const validation = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    }
    else {
        return next();
    }
};
export const loginValidator = [
    body("email").isEmail().withMessage("email is required"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("password should contain atleast 6 characters"),
];
export const signupValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("email").trim().isEmail().withMessage("email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("password should contain at least 6 characters"),
];
export const chatCompleteionValidator = [
    body("message").notEmpty().withMessage("message is required"),
];
//# sourceMappingURL=validators.js.map