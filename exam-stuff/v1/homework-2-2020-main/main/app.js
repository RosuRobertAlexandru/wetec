function addTokens(input, tokens){
    //check if input is a string
    if(typeof input === 'string'){
        if(input.length>=6)
        {
        if(!input.includes('...'))
        {
            return input;
        }
        else{
            //check if tokens is an array of strings
            if(tokens.length>0)
            {
                for(let i=0;i<tokens.length;i++)
                {
                    if(typeof tokens[i].tokenName!=='string')
                    {
                        throw new Error('Invalid array format');
                    }
                }
            }
            let newS = input;
            for(let i=0;i<tokens.length;i++)
            {
                newS = newS.replace('...', '${'+tokens[i].tokenName+'}');
            }
            return newS;
        }
        }
        else{
            throw new Error('Input should have at least 6 characters');
        }
    }
    else{
        throw new Error('Invalid input');
    }
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;