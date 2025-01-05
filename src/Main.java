
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Main {
    public static void main(String[] args) {
        int screenX = 800, screenY = 600, divider = 100;
        JFrame screen = new JFrame("Web");
        screen.setLayout(new BorderLayout());  // BorderLayout for anchoring to top-left
        screen.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        Canvas main = new Canvas(new Dimension(screenX-divider,screenY));
        screen.add(main,BorderLayout.CENTER);
        screen.add(Menu.menu(new Dimension(divider,screenY),main),BorderLayout.WEST);

        screen.pack();
        screen.setVisible(true);
    }
}


