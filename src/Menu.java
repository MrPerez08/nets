import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.WindowConstants;

public final class Menu extends JPanel {
    private final Dimension dim;
    private static Menu instance;
    private Canvas canvas;
    private Menu(Dimension dim, Canvas canvas) {
        this.dim = dim;
        this.canvas = canvas;
        setLayout(new FlowLayout());
        setBackground(Color.LIGHT_GRAY); // Set background color
        setPreferredSize(dim); // Optional: Only when using absolute positioning
        setBorder(BorderFactory.createLineBorder(Color.BLACK)); // Add a border

        JButton addElem = new JButton("+");
        addElem.setFont(new Font("Serif", Font.BOLD, 60));
        addElem.setFocusable(false);
        addElem.setForeground(Color.DARK_GRAY);
        addElem.setBackground(Color.LIGHT_GRAY); // Set button background color
        addElem.setBorderPainted(false);
        addElem.setFocusPainted(false);
        addElem.setContentAreaFilled(false);

        this.add(addElem, BorderLayout.NORTH);

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
            public void actionPerformed(ActionEvent e){
                canvas.addElement();
            }
        }
        );



    }
    public int width(){return dim.width;}
    public int height(){return dim.height;}
    public static Menu menu(Dimension dim,Canvas canvas) {
        if (instance == null) {instance = new Menu(dim,canvas);}
        return instance;
    }
}
