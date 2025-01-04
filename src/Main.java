import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class Main {
    public static void main(String[] args) {
        int screenX = 800, screenY = 600;
        JFrame screen = new JFrame("Net.Connect");
        screen.setPreferredSize(new Dimension(screenX, screenY));
        screen.setLayout(new BorderLayout());  // BorderLayout for anchoring to top-left
        screen.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        int menuX = 100;
        JPanel canvas = new JPanel();
        canvas.setPreferredSize(new Dimension(screenX-menuX, screenY));
        canvas.setLayout(null);
        canvas.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        screen.add(canvas,BorderLayout.CENTER);

        JPanel menu = new JPanel();
        menu.setLayout(new FlowLayout()); // Use FlowLayout (default) or another layout manager
        menu.setBackground(Color.LIGHT_GRAY); // Set background color
        menu.setPreferredSize(new Dimension(menuX,screenY)); // Optional: Only when using absolute positioning
        menu.setBorder(BorderFactory.createLineBorder(Color.BLACK)); // Add a border


        JButton addElem = new JButton("+");
        addElem.setFont(new Font("Serif", Font.BOLD, 60));
        addElem.setFocusable(false);
        addElem.setForeground(Color.DARK_GRAY);
        addElem.setBackground(Color.LIGHT_GRAY); // Set button background color
        addElem.setBorderPainted(false);
        addElem.setFocusPainted(false);
        addElem.setContentAreaFilled(false);

        menu.add(addElem, BorderLayout.NORTH);
        screen.add(menu,BorderLayout.WEST);

        addElem.addMouseListener(new MouseAdapter() {
            @Override
            public void mousePressed(MouseEvent e) {
                addElem.setForeground(Color.WHITE);
            }
            @Override
            public void mouseReleased(MouseEvent e) {
                addElem.setForeground(Color.DARK_GRAY);
            }
        });
        addElem.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                Element element = new Element();
                canvas.add(element.getElement());
                canvas.revalidate();
                canvas.repaint();
            }
        });




        /*
        JButton button = new JButton("+");

        // Customize the button appearance (e.g., make it bigger)
        button.setFont(new Font("Arial", Font.PLAIN, 30));  // Make the "+" sign larger

        button.setFocusPainted(false);  // Remove focus outline
        */
        // Set the layout manager for the frame






        screen.pack();
        screen.setVisible(true);
    }
}
