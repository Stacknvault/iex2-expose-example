import React from 'react';


function Header({name, iex, ready, error, config}) {
  // const { iex, ready, error } = useIEX();
  // const {context, currentStage} = iex;

  console.log(iex, name);
  return (
    <div>
        {ready && 
          <div>
            Hello stage {iex.context.contact.lastName}! You are at stage {iex.currentStage}
              <div>This is the header</div>
              <div>This is the header2</div>
          </div>
        }
        {error && 
          <div>
            Something went wrong: {error}
          </div>
          
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default Header;
