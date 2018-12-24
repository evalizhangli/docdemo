<CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames='fade'
                onmountOnExit
                onEnter={(el) => {el.style.color='blue'}}
                appear={true}
            >
                 </CSSTransition>