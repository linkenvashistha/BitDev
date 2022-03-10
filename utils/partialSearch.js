const Post=require("../models/schemapost");
const User=require("../models/schemauser");

const partialSearch=async (search, type) => {
    const postFind=await Post.find({ title: { $regex: search, $options: "i" } })
        .populate('author');
    const userFind=await User.find({ username: { $regex: search, $options: "i" } });
    // console.log("User:  ");
    // console.log(userFind);
    // console.log('Posts:  ');
    // console.log(postFind);
    if (type=='posts') {
        return { finalResult: postFind };
    }
    else {
        return { finalResult: userFind };
    }
}

module.exports=partialSearch;