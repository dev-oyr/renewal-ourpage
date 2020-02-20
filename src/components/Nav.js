import React, { useRef } from 'react';
import '../styles/nav.scss';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

function NavBar() {
    //==================================meterial-UI
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className="navbar">
            <div className="responsive">
                <Link to="/">
                    <div className="logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="326"
                            height="39"
                            viewBox="0 0 326 39"
                        >
                            <image
                                id="logo"
                                width="326"
                                height="39"
                                xlinkHref="data:image/png;base64,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"
                            />
                        </svg>
                    </div>
                </Link>

                <div className="nav_right">
                    <span className="nav_list">
                        <span>
                            <Link to="/">
                                <Button
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                >
                                    소개
                                    <MdArrowDropDown className="dropIcon" />
                                </Button>
                            </Link>

                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <div className="dropDown">
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <MenuItem onClick={handleClose}>소개</MenuItem>
                                                        <MenuItem onClick={handleClose}>프로젝트</MenuItem>
                                                        <MenuItem onClick={handleClose}>연혁</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    </div>
                                )}
                            </Popper>
                        </span>
                        <Link to="/recruit">
                            <Button aria-controls="simple-menu" aria-haspopup="true">
                                <span>모집안내 </span>
                            </Button>
                        </Link>
                        <Link to="/faq">
                            <Button aria-controls="simple-menu" aria-haspopup="true">
                                <span>FAQ </span>
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button aria-controls="simple-menu" aria-haspopup="true">
                                <span>로그인 </span>
                            </Button>
                        </Link>
                    </span>

                    <span className="nav_button">
                        <Link to="/apply">
                            <button>
                                <span>지원하기</span>
                                <span>></span>
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
