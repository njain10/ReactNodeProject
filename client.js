var curr = [];
        var Note = React.createClass({
            edit() {
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:1337/getCurrencyData',
                    async : false,
                    success: function (data){
                    for (var j = 0; j < data.length - 1; j++){
                        var innerData = data[j];
                        if (curr[j] < innerData[2]){
                            document.getElementById('iconNewText' + j).className = "fa fa-arrow-up";
                        }
                        else {
                            document.getElementById('iconNewText' + j).className = "fa fa-arrow-down";
                        }
                        curr.splice(j,1,innerData[2]);
                        var currencyRate = innerData[1]+innerData[2];
                        document.getElementById('newText' + j).innerHTML = innerData[0] + "    " + currencyRate + "   ";
                    }
                    }
                });
            },
             componentDidMount: function(){
                this.interval = setInterval(this.edit, 7 * 1000);
            },
            componentWillUnmount: function(){
                clearInterval(this.interval);
            },
            renderDisplay() {
                return ( 
                    <div>
                        <p>
                            <label id="newText0"></label>
                            <i  id ="iconNewText0"></i>
                        </p>
                        <p>
                            <label id="newText1"></label>
                            <i  id ="iconNewText1"></i>
                        </p>
                        <p>
                            <label id="newText2"></label>
                            <i  id ="iconNewText2"></i>
                        </p>
                        <p>
                            <label id="newText3"></label>
                            <i  id ="iconNewText3"></i>
                        </p>
                        <p>
                            <label id="newText4"></label>
                            <i  id ="iconNewText4"></i>
                        </p>
                        <p>
                            <label id="newText5"></label>
                            <i  id ="iconNewText5"></i>
                        </p>
                        <p>
                            <label id="newText6"></label>
                            <i  id ="iconNewText6"></i>
                        </p>
                        <p>
                            <label id="newText7"></label>
                            <i  id ="iconNewText7"></i>
                        </p>
                        <p>
                            <label id="newText8"></label>
                            <i  id ="iconNewText8"></i>
                        </p>
                        <p>
                            <label id="newText9"></label>
                            <i  id ="iconNewText9"></i>
                        </p>
                        
                    </div>
                    )
            },
            render() {
              return this.renderDisplay()

            }
        })
        
        ReactDOM.render(<Note />, 
            document.getElementById('react'))