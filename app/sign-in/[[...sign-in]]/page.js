// the [[..sign.in]]
// captures all of the paths from sign up

import { SignIn } from "@clerk/nextjs";
import { Box, AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <Container maxWidth="sm">
            <AppBar position="static" sc = {{backgroundCOlor:"#3f51b5"}}>
                <Toolbar>
                    <Typography variant = 'h6' sx= {{
                        flexGrow: 1,
                    }}
                    >
                        Flashcard SaaS
                    </Typography>
                    <Button color = "inherit">
                        <Link href = "/sign-in" passHref>
                            Login
                        </Link>
                    </Button>
                    <Button color = "inherit">
                        <Link href = "/sign-up" passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                display = 'flex'
                flexDirection = 'column'
                alignItems="center"
                justifyContent='center'
            >
                <Typography variant = 'h4'> Sign In </Typography>
                <SignIn />
            </Box>
        </Container>
    )
}