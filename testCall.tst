 const dummyTestData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    image: 'https://example.com/profile.jpg',
    dob: new Date('1990-05-15'),
    phoneNumber: '12345678',
    gender: 'Female',
    city: 'City',
    state: 'State chnages',
    collegeName: '  IIT Bombay',
    stream: 'Medical',
    yearOfStudy: 'Fourth',
    source: 'Twitter',
    referralCode: 'AAAD1234',
  }

  const dummyCall = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:3000/api/user/updateProfile', dummyTestData)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
