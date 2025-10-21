import {
  Container,
  Title,
  Text,
  TextInput,
  Button,
  Group,
  Divider,
  Paper,
  Flex,
  Anchor,
} from "@mantine/core";

import {Apple, Facebook } from "lucide-react"; // Vous devrez créer ces icônes ou utiliser une bibliothèque d'icônes

const Login = () => {
  return (
    <Container size="xs" className="p-0">
      {/* En-tête du site (simulé) */}

      {/* Conteneur principal de la carte de connexion */}
      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        className="bg-white"
      >
        <Title order={2} ta="center" mb="sm">
          Agent Login
        </Title>
        <Text c="dimmed" ta="center" size="sm" mb="xl">
          Hey, Enter your details to get sign in to your account
        </Text>

        {/* Formulaire de connexion */}
        <form>
          <TextInput
            label="Enter Email / Phone No"
            placeholder="Saisir votre adresse mail ou numéro de téléphone"
            required
            mb="md"
            rightSection={<span className="text-gray-400">○</span>}
          />

          <TextInput
            label="Passcode"
            placeholder="Saisir votre mot de passe"
            required
            type="password"
            mb="sm"
            rightSection={
              <Anchor size="xs" c="dimmed">
                Hide
              </Anchor>
            }
          />

          <Text size="xs" c="dimmed" mb="md">
            Having trouble in sign in?
          </Text>

          <Button fullWidth color="orange" size="md" type="submit">
            Sign In
          </Button>
        </form>

        {/* Séparateur "Or" */}
        <Divider my="lg" label="Or Sign in with" labelPosition="center" />

        {/* Boutons de connexion sociale */}
        <Group grow mt="md">
          <Button variant="light" leftSection={<Facebook />} size="sm">
            Google
          </Button>
          <Button variant="light" leftSection={<Facebook />} size="sm">
            Apple ID
          </Button>
          <Button variant="light" leftSection={<Facebook />} size="sm">
            Facebook
          </Button>
        </Group>

        {/* Lien pour les nouveaux utilisateurs */}
        <Text ta="center" size="xs" mt="md">
          Don't have an account?{" "}
          <Anchor href="#" size="xs">
            Request Now
          </Anchor>
        </Text>
      </Paper>

      {/* Pied de page */}
      <Text ta="center" size="xs" mt="xl" c="dimmed">
        Copyright @Blueline 2025 | Privacy Policy
      </Text>
    </Container>
  );
};

export default Login;
