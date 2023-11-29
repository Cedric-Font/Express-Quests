const validateUsers = (req, res, next) => {
    const {firstname, lastname, email, city, language} = req.body;
    const errors = [];
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

    if(firstname == null){
        errors.push({field: "title", message:"this fiels is required"})
    }else if(firstname.length > 255){
        errors.push({message: "title should contain less tahen 255 character"})
    }
    if(lastname == null){
        errors.push({field: "title", message:"this fiels is required"})
    }else if(lastname.length > 255){
        errors.push({message: "title should contain less tahen 255 character"})
    }
    if (!emailRegex.test(email)) {
        errors.push({ field: 'email', message: 'Invalid email' });
      }else if(email.length > 255){
        errors.push({message: "title should contain less tahen 255 character"})
    }
    if(city == null){
        errors.push({ field: 'email', message: 'Invalid email' });
      }else if(city.length > 255){
        errors.push({message: "title should contain less tahen 255 character"})
    }
    if(language == null){
        errors.push({ field: 'email', message: 'Invalid email' });
      }else if(language.length > 255){
        errors.push({message: "title should contain less tahen 255 character"})
    }

    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
      } else {
        next();
      }
}

module.exports = validateUsers;
