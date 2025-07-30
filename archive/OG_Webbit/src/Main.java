import java.awt.*;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.*;

public void main() throws IOException {
    Toolkit.getDefaultToolkit().setDynamicLayout(true);

    int screenX = 800, screenY = 600, divider = 100;
    JFrame screen = new JFrame("Web");
    screen.setLayout(new BorderLayout());
    screen.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
    Image icon = ImageIO.read(new File("src/Assets/webpic2.png"));

    screen.setIconImage(icon);

    Canvas main = new Canvas(new Dimension(screenX - divider, screenY));
    screen.add(main, BorderLayout.CENTER);
    screen.add(Menu.menu(new Dimension(divider, screenY), main), BorderLayout.WEST);

    screen.pack();
    screen.setVisible(true);
}
