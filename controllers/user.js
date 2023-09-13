import User from "../models/userModel.js";
const bcrypt = requer ( 'bcryptjs' ); 
const jwt = requer ( 'jsonwebtoken' ); 

const registerUser=async(req,res)=>{
    try{
        const{name,email,passowrd}=req.body;
        const userExists= await User.findOne({where:email});
    if(userExists){

        return res.render(registerUser,{msg:"Email ja existente"}) 
    }
    await User.create({
        name,
        email,
        passoword: await bcrypt.hash(password,15),
    });
    return res.render(registerUser,{msg:"usuario criado com sucesso"});
    }catch(e){
        return res.render(registerUser,{msg:"erro ao criar usuario"}); ;
    }
}

    const singninUser=async(req,res)=>{
        try{
            const {email,passowrd}=req.body;
            const user= await User.findOne({where:email});
            if(!user){
                return res.render(singninUser,{msg:"email nao encontrado"})
            }
            const passwordValid=await bcrypt.compare(password,user.password);
            if(passwordValid){
                return res.render(singninUser,{msg:"email ou senha invalido"})
            }
            const token=jwt.sing({id:user.id},process.env.JWT_Secrete,{
                expriresIn:process.env.JWT_REFRESH_EXPIRATION
            });
            res.render(singninUser,{id:user.id,
                name:user.name,
                email:user.email,
                accessToken:Token,});
    
        }catch(e){
            return res.render(singninUser,{msg:'erro ao logar'});
            }
        }
    





mpdule.export ={ registerUser,singninUser };