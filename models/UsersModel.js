const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    logintType: {
        type: String,
        default: "1", //1 일반 이메일, 2.구글 회원가입, 3. 네이버 회원가입
    },
    age: {
        type: Number,
        default: "",
    },
    gender: {
        type: String,
        default: "",
      },
    createdAt: { 
        type: Date, 
        default: Date.now 
      },
    type: {
        type: String,
        default: "1", // '1' 일반유러, '2' 트레이너
      },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "trainer",
      },
    checklist: [
        {
            trainerComment: {
                type: String,
                default: "",
            },
            workoutlist: [
                {
                    name: {
                        type: String,
                        default: "",
                    },
                    contents: {
                        type: String,
                        default: "",
                    },
                    isEditable: {
                        type: Boolean,
                        default: false,
                    },
                    
                }
            ],
            userComment: {
                type: String,
                default: "",
            },
            date: {
                type: Date,
                default: Date.now,

            }
        }
    ],
    bodyLog: [
        {
           morningBody: [],
           morningWeight:{
               type: Number,
               default: "",
           },
           nightBody: [],
           nightWeight:{
               type: Number,
               default: "",
           },
           foodlist: [
               {
                   title: {
                       type: String,
                       default: "",
                   },
                   time: {
                    type: String,
                    default: "",
                    },
                    foodPhoto: [],
               }
           ],
           trainerComment: {
            type: String,
            default: "",
            },
           date: {
            type: Date,
            default: Date.now,

           }   
        }
    ]
    


         

})

// userSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if(err) {
//             return cb(err)
//         }
//         cb(null, isMatch)
//     })
// }

module.exports = mongoose.model('User', UsersSchema)